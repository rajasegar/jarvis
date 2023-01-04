import { modifier } from "ember-modifier";

import { EditorView, basicSetup } from "codemirror";
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";

export default modifier(function codeMirror(
  element,
  [readOnly, content] /*, positional, named*/
) {
  if (!element) {
    throw new Error("CodeMirror modifier has no element");
  }

  let startState = EditorState.create({
    doc: "Hello World",
    extensions: [basicSetup, javascript()],
  });

  const editor = new EditorView({
    state: startState,
    parent: element,
  });

  return () => {
    // element.removeEventListener(eventName, handler);
  };
});
