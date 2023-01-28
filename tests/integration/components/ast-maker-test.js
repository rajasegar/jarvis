import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render, findAll, select, waitFor } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | ast-maker", function (hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function (assert) {
    await render(hbs`<AstMaker></AstMaker>
    `);

    assert.strictEqual(findAll("footer").length, 1);
    const [outputEditor] = findAll("#output-editor [contenteditable]");
    assert.strictEqual(outputEditor.textContent, "bar()");
  });

  test("select nodeop remove", async function (assert) {
    await render(hbs`<AstMaker></AstMaker>`);
    await select("[data-test='lst-nodeop']", "remove");
    const [outputEditor] = findAll("#output-editor [contenteditable]");
    assert.strictEqual(outputEditor.textContent, "");
  });

  test("select nodeop insert-before", async function (assert) {
    await render(hbs`<AstMaker></AstMaker>`);
    await select("[data-test='lst-nodeop']", "insert-before");
    const [outputEditor] = findAll("#output-editor [contenteditable]");
    assert.strictEqual(outputEditor.textContent, "bar();foo()");
  });

  test("select nodeop insert-after", async function (assert) {
    await render(hbs`<AstMaker></AstMaker>`);
    await select("[data-test='lst-nodeop']", "insert-after");
    const [outputEditor] = findAll("#output-editor [contenteditable]");
    assert.strictEqual(outputEditor.textContent, "foo()bar();");
  });

  test("select language handlebars", async function (assert) {
    await render(hbs`<AstMaker></AstMaker>`);
    await select("[data-test='lst-lang']", "Handlebars");
    await waitFor("#output-editor [contenteditable]", { timeout: 2000 });
    const [outputEditor] = findAll("#output-editor [contenteditable]");
    assert.strictEqual(outputEditor.textContent, "{{bar}}");
  });
});
