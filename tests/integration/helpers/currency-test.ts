import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | currency', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct currency sign', async function (assert) {
    this.set('inputValue', '1234.50');

    await render(hbs`{{currency inputValue}}`);
    assert.ok(this.element.textContent != null);
    assert.equal(this.element.textContent, '1234.50 €');
  });
});
