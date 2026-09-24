(function(){
  var menuBtn = document.getElementById('menu-btn');
  var nav = document.getElementById('site-nav');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var BASE = document.baseURI;

  /* Old single page links (#faq, #services, #area-oviedo) keep working: send them to the matching page. */
  var LEGACY = {"home": "", "adult-care": "adult-care", "school-age": "school-age", "pricing": "pricing", "service-areas": "service-areas", "families": "families", "facilities": "facilities", "about": "about", "careers": "careers", "contact": "contact", "faq": "faq", "intake": "intake", "area-lake-nona": "service-areas/lake-nona", "area-orlando": "service-areas/orlando", "area-winter-park": "service-areas/winter-park", "area-kissimmee": "service-areas/kissimmee", "area-st-cloud": "service-areas/st-cloud", "area-celebration": "service-areas/celebration", "area-dr-phillips": "service-areas/dr-phillips", "area-windermere": "service-areas/windermere", "area-oviedo": "service-areas/oviedo", "area-lake-mary": "service-areas/lake-mary", "services": "adult-care"};
  (function(){
    var h = (location.hash || '').replace(/^#/, '');
    if (h && !document.getElementById(h) && Object.prototype.hasOwnProperty.call(LEGACY, h)){
      location.replace(new URL(LEGACY[h] || './', BASE).href);
    }
  })();

  function scrollToId(id){
    var el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
    try { el.focus({preventScroll: true}); } catch (e) { el.focus(); }
  }
  /* In page buttons (jump lists, "Send a Referral", contact shortcuts) */
  document.addEventListener('click', function(e){
    var b = e.target.closest ? e.target.closest('button[data-scroll]') : null;
    if (!b) return;
    var role = b.getAttribute('data-role');
    if (role){
      var sel = document.querySelector('main form select[name="role"]');
      if (sel){ for (var i = 0; i < sel.options.length; i++){ var o = sel.options[i]; if (o.value === role || o.text === role){ sel.selectedIndex = i; break; } } }
    }
    scrollToId(b.getAttribute('data-scroll'));
  });
  /* Audience context from the link a visitor used (?for=adult|school|facility|referral). Only an audience word, never health information; the field stays editable. */
  (function(){
    var AUD = {adult:'Family member or caregiver', school:'Parent of a school age child', facility:'Facility administrator', referral:'Physician or case manager'};
    var m = /[?&]for=([a-z]+)/.exec(location.search);
    if (!m || !AUD[m[1]]) return;
    Array.prototype.forEach.call(document.querySelectorAll('main form select[name="role"]'), function(sel){
      for (var i = 0; i < sel.options.length; i++){ if (sel.options[i].text === AUD[m[1]]){ sel.selectedIndex = i; break; } }
    });
  })();
  function closeMenu(returnFocus){
    if (!nav.classList.contains('open')) return;
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    if (returnFocus) menuBtn.focus();
  }
  /* Skip link */
  document.getElementById('skip-link').addEventListener('click', function(){
    var page = document.querySelector('main[data-page]:not([hidden])');
    var h1 = page && page.querySelector('h1');
    if (h1){ h1.scrollIntoView({block: 'start'}); h1.focus(); }
  });

  /* Preview banner, remembered in memory only */
  document.getElementById('banner-close').addEventListener('click', function(){
    document.getElementById('preview-banner').hidden = true;
    var wm = document.querySelector('.wordmark');
    if (wm) wm.focus();
  });

  /* Mobile menu */
  function openMenu(){
    nav.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    var first = nav.querySelector('a');
    if (first) first.focus();
  }
  menuBtn.addEventListener('click', function(){
    if (nav.classList.contains('open')) closeMenu(false); else openMenu();
  });
  function onEsc(e){
    if ((e.key === 'Escape' || e.key === 'Esc') && nav.classList.contains('open')){
      e.stopPropagation();
      closeMenu(true);
    }
  }
  nav.addEventListener('keydown', onEsc);
  menuBtn.addEventListener('keydown', onEsc);
  nav.addEventListener('click', function(e){
    if (e.target.closest && e.target.closest('a')) closeMenu(false);
  });
  var mq = window.matchMedia('(min-width: 1100px)');
  function onMq(){ if (mq.matches) closeMenu(false); }
  if (mq.addEventListener) mq.addEventListener('change', onMq); else if (mq.addListener) mq.addListener(onMq);

  /* Forms */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  function setErr(input, msg){
    var err = document.getElementById(input.id + '-err');
    if (err) err.textContent = msg || '';
    if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
  }
  function validate(form){
    var firstBad = null;
    Array.prototype.forEach.call(form.querySelectorAll('[required]'), function(input){
      var v = input.value.trim();
      var MSG = {name: 'Please enter your name.', email: 'Please enter your email address.', license: 'Please enter your Florida license number.'};
      var msg = '';
      if (!v) msg = MSG[input.name] || 'Please fill in this field.';
      else if (input.type === 'email' && !EMAIL_RE.test(v)) msg = 'Please enter a valid email address, like name@example.com.';
      setErr(input, msg);
      if (msg && !firstBad) firstBad = input;
    });
    return firstBad;
  }
  Array.prototype.forEach.call(document.querySelectorAll('form.form'), function(form){
    var panel = form.nextElementSibling;
    Array.prototype.forEach.call(form.querySelectorAll('[required]'), function(input){
      input.addEventListener('input', function(){
        if (input.getAttribute('aria-invalid') === 'true') validate(form);
      });
    });
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var bad = validate(form);
      if (bad){ bad.focus(); return; }
      var full = form.querySelector('[name="name"]').value.trim();
      var first = full.split(/\s+/)[0];
      var text;
      if (form.getAttribute('data-kind') === 'application'){
        text = 'Thank you, ' + first + '. This is a preview, so nothing was sent or saved. Once the practice connects its application inbox, submissions like this will go directly to Whitney.';
      } else {
        text = 'Thank you, ' + first + '. This is a preview, so nothing was sent or saved. Once the practice connects its inquiry inbox, requests like this will go directly to Whitney.';
      }
      panel.querySelector('.confirm-text').textContent = text;
      form.hidden = true;
      panel.hidden = false;
      panel.focus();
    });
    panel.querySelector('[data-reset]').addEventListener('click', function(){
      form.reset();
      Array.prototype.forEach.call(form.querySelectorAll('[required]'), function(i){ setErr(i, ''); });
      var fn = form.querySelector('.file-name');
      if (fn) fn.textContent = 'No file chosen yet.';
      panel.hidden = true;
      form.hidden = false;
      var firstInput = form.querySelector('input, select, textarea');
      if (firstInput) firstInput.focus();
    });
  });
  var resume = document.getElementById('a-resume');
  if (resume) resume.addEventListener('change', function(){
    var out = document.getElementById('a-resume-name');
    out.textContent = resume.files && resume.files.length ? 'Selected: ' + resume.files[0].name : 'No file chosen yet.';
  });

  /* Header: compact state once the page scrolls (height is reserved, so nothing below moves) */
  var header = document.querySelector('.site-header');
  var ticking = false;
  function onScroll(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function(){
      ticking = false;
      if (header) header.classList.toggle('is-scrolled', (window.scrollY || window.pageYOffset) > 12);
    });
  }
  window.addEventListener('scroll', onScroll, {passive: true});
  onScroll();

})();
(function(){
  if(!('IntersectionObserver' in window)) return;
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.documentElement.classList.add('js-reveal');
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.08});
  function arm(){document.querySelectorAll('main:not([hidden]) .sec > .wrap, main:not([hidden]) .scape .glass-panel').forEach(function(el){if(!el.classList.contains('reveal')){el.classList.add('reveal');io.observe(el);}});}
  arm(); 
  setTimeout(function(){document.querySelectorAll('.reveal:not(.in)').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<innerHeight)el.classList.add('in');});},1200);
})();
