/* New Patient Intake. Runs in memory only: no network, no storage. Values are wiped on submit, on Start over, and when leaving the #intake route. */
(function(){
  /* Set INTAKE_GATE_ENABLED to false to skip the access code screen; the form then opens directly. */
  var INTAKE_GATE_ENABLED = true;
  var DEMO_CODE = 'VOICE2026';
  var TOTAL = 8;

  function $(id){ return document.getElementById(id); }
  function each(list, fn){ Array.prototype.forEach.call(list, fn); }
  if (!$('page-intake')) return;

  var gate = $('ix-gate'), gateForm = $('ix-gate-form'), code = $('ix-code');
  var app = $('ix-app'), form = $('ix-form'), done = $('ix-done'), live = $('ix-live'), mode = $('ix-mode');
  var backBtn = $('ix-back'), nextBtn = $('ix-next'), submitBtn = $('ix-submit');
  var peopleBox = $('ix-people'), addPersonBtn = $('ix-add-person');
  var steps = Array.prototype.slice.call(form.querySelectorAll('.ix-step'));
  var stepBtns = Array.prototype.slice.call(document.querySelectorAll('#ix-steplist button'));
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var cur = 1, maxReached = 1, editing = false, personSeq = 0;

  function radioVal(name){
    var el = form.querySelector('input[name="' + name + '"]:checked');
    return el ? el.value : '';
  }
  /* Hidden by a condition (ignores the step container itself) */
  function condHidden(el){
    var n = el;
    while (n && n !== form){
      if (n.hidden && !n.classList.contains('ix-step')) return true;
      n = n.parentElement;
    }
    return false;
  }
  function parseDate(v){
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v), y, mo, d;
    if (m){ y = +m[1]; mo = +m[2]; d = +m[3]; }
    else {
      m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(v);
      if (!m) return null;
      y = +m[3]; mo = +m[1]; d = +m[2];
    }
    var dt = new Date(y, mo - 1, d);
    return (dt.getFullYear() === y && dt.getMonth() === mo - 1 && dt.getDate() === d) ? dt : null;
  }
  function fmtDate(d){ return d.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'}); }
  function focusEl(el){
    var t = el.tagName === 'FIELDSET' ? el.querySelector('input') : el;
    if (t){ try { t.focus({preventScroll: false}); } catch (e) { t.focus(); } }
  }

  /* ---------- Conditional sections ---------- */
  function applyConditions(){
    var who = radioVal('for'), by = radioVal('by'), where = radioVal('where'), pay = radioVal('payment');
    var isChild = who === 'child';
    var st = {
      child: isChild,
      notchild: who !== 'child',
      notadult: who !== 'adult',
      rp: isChild || (by !== '' && by !== 'self'),
      facility: where === 'alf' || where === 'snf',
      access: where === 'home' || where === 'alf' || where === 'snf',
      prior: radioVal('prior_therapy') === 'Yes',
      swallow: !isChild && $('ix-r-swallow').checked,
      study: radioVal('swallow_study') === 'Yes',
      medicare: pay === 'medicare',
      'private': pay === 'private' || pay === 'superbill',
      superbill: pay === 'superbill',
      stepup: pay === 'stepup',
      facilitypay: pay === 'facility',
      ma: radioVal('medicare_advantage') === 'Yes',
      tele: !!($('ix-tele') && $('ix-tele').checked)
    };
    each(form.querySelectorAll('[data-if]'), function(el){
      el.hidden = !st[el.getAttribute('data-if')];
    });
  }

  /* ---------- Validation ---------- */
  function setErr(el, msg){
    var e = $(el.id + '-err');
    if (e) e.textContent = msg || '';
    if (msg) el.setAttribute('aria-invalid', 'true'); else el.removeAttribute('aria-invalid');
  }
  function checkField(el){
    if (el.tagName === 'FIELDSET'){
      return el.querySelector('input:checked') ? '' : (el.getAttribute('data-msg') || 'Please choose one.');
    }
    if (el.type === 'checkbox'){
      return (el.required && !el.checked) ? (el.getAttribute('data-msg') || 'Please check this box.') : '';
    }
    var v = el.value.trim();
    if (!v) return el.required ? (el.getAttribute('data-msg') || 'Please fill in this field.') : '';
    var f = el.getAttribute('data-fmt');
    if (f === 'email' && !EMAIL_RE.test(v)) return 'Please enter a valid email address, like name@example.com.';
    if (f === 'tel' && v.replace(/\D/g, '').length < 10) return 'Please enter a 10 digit phone number, including the area code.';
    if (f === 'zip' && !/^\d{5}(-?\d{4})?$/.test(v)) return 'Please enter a 5 digit ZIP code.';
    if (f === 'npi' && !/^\d{10}$/.test(v)) return 'An NPI is 10 digits. Leave it blank if you are not sure.';
    if (f === 'mbi'){
      var m = v.replace(/[\s-]/g, '').toUpperCase();
      if (!/^[1-9][A-Z0-9]{10}$/.test(m) || !/[A-Z]/.test(m)) return 'A Medicare number has 11 letters and numbers and starts with a number from 1 to 9. Leave it blank if the card is not handy.';
    }
    if (f === 'dob'){
      var d = parseDate(v);
      if (!d) return 'Please enter a valid date.';
      if (d > new Date()) return 'The date of birth cannot be in the future.';
      if (d.getFullYear() < 1900) return 'Please check the year.';
    }
    return '';
  }
  function targets(step){
    return Array.prototype.filter.call(
      step.querySelectorAll('fieldset[data-req], input[required]:not([type="radio"]), select[required], textarea[required], [data-fmt]'),
      function(el){ return !condHidden(el); }
    );
  }
  function validateStep(n, show){
    var first = null, count = 0;
    targets(steps[n - 1]).forEach(function(el){
      var msg = checkField(el);
      if (show) setErr(el, msg);
      if (msg){ count++; if (!first) first = el; }
    });
    return {first: first, count: count};
  }
  function reportErrors(r){
    live.textContent = r.count === 1 ? 'One answer needs attention.' : r.count + ' answers need attention.';
    focusEl(r.first);
  }
  form.addEventListener('input', recheck);
  form.addEventListener('change', function(e){ applyConditions(); recheck(e); });
  function recheck(e){
    var t = e.target;
    if (!t || !t.id && !t.name) return;
    var g = t.closest('fieldset[data-req]');
    var el = (g && (t.type === 'radio' || t.type === 'checkbox')) ? g : t;
    if (el.getAttribute('aria-invalid') === 'true') setErr(el, checkField(el));
  }

  /* ---------- Steps ---------- */
  function showStep(n, moveFocus){
    cur = n;
    if (n > maxReached) maxReached = n;
    if (n === TOTAL) editing = false;
    steps.forEach(function(s){ s.hidden = +s.getAttribute('data-step') !== n; });
    var title = steps[n - 1].getAttribute('data-title');
    $('ix-count').textContent = 'Step ' + n + ' of ' + TOTAL;
    $('ix-count-title').textContent = title;
    $('ix-fill').style.width = (n / TOTAL * 100) + '%';
    stepBtns.forEach(function(b){
      var k = +b.getAttribute('data-go');
      b.disabled = k > maxReached;
      if (k === n) b.setAttribute('aria-current', 'step'); else b.removeAttribute('aria-current');
    });
    backBtn.hidden = n === 1;
    nextBtn.hidden = n === TOTAL;
    submitBtn.hidden = n !== TOTAL;
    nextBtn.textContent = (editing && n < TOTAL) ? 'Save and review' : 'Continue';
    if (n === TOTAL){
      buildSummary();
      $('ix-sig-date').value = fmtDate(new Date());
    }
    live.textContent = 'Step ' + n + ' of ' + TOTAL + ': ' + title;
    if (moveFocus){
      var p = $('ix-progress');
      if (p.scrollIntoView) p.scrollIntoView({block: 'start'});
      var h = steps[n - 1].querySelector('h2');
      if (h){ try { h.focus({preventScroll: true}); } catch (e) { h.focus(); } }
    }
  }
  /* Check steps 1 to 7; jump to the first one with a problem */
  function firstBadStep(){
    for (var k = 1; k < TOTAL; k++){
      if (validateStep(k, false).first) return k;
    }
    return 0;
  }
  function goToBad(k){
    showStep(k, true);
    reportErrors(validateStep(k, true));
  }
  function goNext(){
    var r = validateStep(cur, true);
    if (r.first){ reportErrors(r); return; }
    if (editing){
      var bad = firstBadStep();
      if (bad){ goToBad(bad); return; }
      showStep(TOTAL, true);
      return;
    }
    showStep(Math.min(cur + 1, TOTAL), true);
  }
  function submitNow(){
    if (cur !== TOTAL){ goNext(); return; }
    var bad = firstBadStep();
    if (bad){ goToBad(bad); return; }
    var r = validateStep(TOTAL, true);
    if (r.first){ reportErrors(r); return; }
    finish();
  }
  nextBtn.addEventListener('click', goNext);
  backBtn.addEventListener('click', function(){ if (cur > 1) showStep(cur - 1, true); });
  form.addEventListener('submit', function(e){ e.preventDefault(); submitNow(); });
  form.addEventListener('keydown', function(e){
    if (e.key !== 'Enter') return;
    var t = e.target;
    if (t.tagName !== 'INPUT' || t.type === 'checkbox' || t.type === 'radio') return;
    e.preventDefault();
    submitNow();
  });
  /* Step list and Edit links */
  form.addEventListener('click', function(e){
    var b = e.target.closest ? e.target.closest('button[data-go]') : null;
    if (!b || b.disabled) return;
    var k = +b.getAttribute('data-go');
    if (k > maxReached || k === cur) return;
    if (maxReached === TOTAL && k < TOTAL) editing = true;
    showStep(k, true);
  });

  /* ---------- Authorized people (up to 3) ---------- */
  function mkField(id, name){
    var wrap = document.createElement('div');
    wrap.className = 'field';
    var lab = document.createElement('label');
    lab.setAttribute('for', id);
    var inp = document.createElement('input');
    inp.type = 'text'; inp.id = id; inp.name = name; inp.autocomplete = 'off';
    wrap.appendChild(lab); wrap.appendChild(inp);
    return wrap;
  }
  function renumber(){
    var rows = peopleBox.querySelectorAll('.ix-person');
    each(rows, function(row, i){
      var labs = row.querySelectorAll('label');
      labs[0].textContent = 'Person ' + (i + 1) + ' name';
      labs[1].textContent = 'Person ' + (i + 1) + ' relationship';
      row.querySelector('button').setAttribute('aria-label', 'Remove person ' + (i + 1));
    });
    addPersonBtn.disabled = rows.length >= 3;
    addPersonBtn.hidden = rows.length >= 3;
    addPersonBtn.textContent = rows.length ? 'Add another' : 'Add a person';
  }
  function addPerson(focus){
    if (peopleBox.querySelectorAll('.ix-person').length >= 3) return;
    personSeq++;
    var id = 'ix-p' + personSeq;
    var row = document.createElement('div');
    row.className = 'ix-person';
    row.appendChild(mkField(id + '-name', 'authorized_name'));
    row.appendChild(mkField(id + '-rel', 'authorized_relationship'));
    var rm = document.createElement('button');
    rm.type = 'button'; rm.className = 'textlink'; rm.textContent = 'Remove';
    rm.addEventListener('click', function(){
      peopleBox.removeChild(row);
      renumber();
      addPersonBtn.focus();
    });
    row.appendChild(rm);
    peopleBox.appendChild(row);
    renumber();
    if (focus) $(id + '-name').focus();
  }
  addPersonBtn.addEventListener('click', function(){ addPerson(true); });

  /* ---------- Review summary ---------- */
  function labelFor(input){
    var l = form.querySelector('label[for="' + input.id + '"]');
    return l ? l.textContent.replace(/\*/g, '').trim() : input.value;
  }
  function addRow(dl, term, val){
    var d = document.createElement('div');
    var dt = document.createElement('dt'); dt.textContent = term;
    var dd = document.createElement('dd'); dd.textContent = val;
    d.appendChild(dt); d.appendChild(dd); dl.appendChild(d);
  }
  function buildSummary(){
    var box = $('ix-summary');
    while (box.firstChild) box.removeChild(box.firstChild);
    steps.slice(0, TOTAL - 1).forEach(function(step, i){
      var n = i + 1, title = step.getAttribute('data-title');
      var sec = document.createElement('section');
      sec.setAttribute('aria-labelledby', 'ix-sum-h' + n);
      var head = document.createElement('div'); head.className = 'ix-sum-head';
      var h = document.createElement('h3'); h.id = 'ix-sum-h' + n; h.textContent = title;
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'textlink'; b.textContent = 'Edit';
      b.setAttribute('data-go', String(n));
      b.setAttribute('aria-label', 'Edit ' + title);
      head.appendChild(h); head.appendChild(b); sec.appendChild(head);
      var dl = document.createElement('dl');
      each(step.querySelectorAll('[data-sum]'), function(f){
        if (condHidden(f)) return;
        var val = '';
        if (f.tagName === 'FIELDSET'){
          val = Array.prototype.map.call(f.querySelectorAll('input:checked'), labelFor).join(', ');
        } else if (f.type === 'checkbox'){
          val = f.checked ? f.value : '';
        } else if (f.tagName === 'SELECT'){
          val = f.value ? f.options[f.selectedIndex].text : '';
        } else {
          val = f.value.trim();
          if (f.type === 'date' && val){ var d = parseDate(val); if (d) val = fmtDate(d); }
        }
        if (val) addRow(dl, f.getAttribute('data-sum'), val);
      });
      if (n === 7){
        var names = [];
        each(peopleBox.querySelectorAll('.ix-person'), function(row){
          var ins = row.querySelectorAll('input');
          var nm = ins[0].value.trim(), rel = ins[1].value.trim();
          if (nm) names.push(rel ? nm + ' (' + rel + ')' : nm);
        });
        if (names.length) addRow(dl, 'Family we may talk with', names.join('\n'));
      }
      if (dl.children.length) sec.appendChild(dl);
      else {
        var p = document.createElement('p'); p.className = 'ix-hint'; p.textContent = 'Nothing entered.';
        sec.appendChild(p);
      }
      box.appendChild(sec);
    });
  }

  /* ---------- Open, finish, wipe ---------- */
  function wipe(){
    form.reset();
    each(form.querySelectorAll('[aria-invalid]'), function(el){ el.removeAttribute('aria-invalid'); });
    each(form.querySelectorAll('.err'), function(el){ el.textContent = ''; });
    while (peopleBox.firstChild) peopleBox.removeChild(peopleBox.firstChild);
    var box = $('ix-summary');
    while (box.firstChild) box.removeChild(box.firstChild);
    $('ix-sig-date').value = '';
    code.value = '';
    setErr(code, '');
    cur = 1; maxReached = 1; editing = false;
    addPerson(false);
    applyConditions();
    showStep(1, false);
    live.textContent = '';
  }
  function openForm(preview, moveFocus){
    gate.hidden = true;
    done.hidden = true;
    app.hidden = false;
    mode.textContent = preview
      ? 'Preview mode: opened without an access code. Nothing you enter is saved or sent.'
      : 'This preview does not save or send anything.';
    showStep(1, moveFocus);
  }
  function openInitial(moveFocus){
    if (INTAKE_GATE_ENABLED){
      app.hidden = true;
      done.hidden = true;
      gate.hidden = false;
      if (moveFocus) code.focus();
    } else {
      openForm(false, moveFocus);
    }
  }
  function resetAll(moveFocus){
    wipe();
    $('ix-done-text').textContent = '';
    openInitial(moveFocus);
  }
  function finish(){
    var signer = $('ix-sig-name').value.trim();
    var first = signer.split(/\s+/)[0] || 'you';
    wipe();
    app.hidden = true;
    gate.hidden = true;
    $('ix-done-text').textContent = 'Thank you, ' + first + '. This is a preview, so nothing was saved or sent. Before the practice opens, intake will move to a secure patient system chosen by the practice.';
    done.hidden = false;
    if (done.scrollIntoView) done.scrollIntoView({block: 'center'});
    try { done.focus({preventScroll: true}); } catch (e) { done.focus(); }
  }

  gateForm.addEventListener('submit', function(e){
    e.preventDefault();
    var v = code.value.trim().toUpperCase();
    if (v === DEMO_CODE){
      code.value = '';
      setErr(code, '');
      openForm(false, true);
      return;
    }
    setErr(code, v ? 'That code did not match. You can also choose Preview without a code.' : 'Please enter your access code.');
    code.focus();
  });
  code.addEventListener('input', function(){ if (code.getAttribute('aria-invalid') === 'true') setErr(code, ''); });
  $('ix-preview-btn').addEventListener('click', function(){ code.value = ''; setErr(code, ''); openForm(true, true); });
  $('ix-restart').addEventListener('click', function(){ resetAll(true); });

  /* Clear everything when leaving the intake route or the page */
  var onIntake = location.hash === '#intake';
  window.addEventListener('hashchange', function(){
    var now = location.hash === '#intake';
    if (onIntake && !now) resetAll(false);
    onIntake = now;
  });
  window.addEventListener('pagehide', function(){ resetAll(false); });

  resetAll(false);
})();