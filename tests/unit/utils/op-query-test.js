import opQuery from "jarvis/utils/op-query";
import { module, test } from "qunit";

module("Unit | Utility | op-query", function () {
  test("it works", async function (assert) {
    let result = await opQuery("javascript", "remove", "bar()");
    assert.strictEqual(result, ".remove();");
  });
});
