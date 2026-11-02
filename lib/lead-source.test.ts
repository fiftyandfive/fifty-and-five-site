import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeLeadSource, leadSourceLabel, LEAD_SOURCE_OPTIONS } from './lead-source';

test('source normalization only accepts offered values', () => {
  for (const o of LEAD_SOURCE_OPTIONS) assert.equal(normalizeLeadSource(o.value), o.value);
  assert.equal(normalizeLeadSource(' Google '), 'google');
  assert.equal(normalizeLeadSource('tiktok'), null);
  assert.equal(normalizeLeadSource(undefined), null);
  assert.equal(normalizeLeadSource(42), null);
});

test('source labels', () => {
  assert.equal(leadSourceLabel('ai_assistant'), 'ChatGPT or another AI assistant');
  assert.equal(leadSourceLabel(null), 'Not given');
});
