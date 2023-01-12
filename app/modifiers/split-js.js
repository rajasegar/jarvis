import { modifier } from "ember-modifier";
import Split from "split.js";

export default modifier(function splitJs(
  element,
  [], // eslint-disable-line
  { direction } /*, positional, named*/
) {
  Split([element.children[0], element.children[1]], {
    sizes: [50, 50],
    direction: direction,
  });
});
