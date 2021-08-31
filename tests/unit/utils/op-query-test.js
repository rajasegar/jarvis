import opQuery from "jarvis/utils/op-query";
import { module, test } from "qunit";

module("Unit | Utility | op-query", function () {
  test("it works", function (assert) {
    let result = opQuery("javascript", "remove");
    assert.equal(result, ".remove();");
  });
});
