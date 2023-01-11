import { modifier } from "ember-modifier";

import { EditorView, basicSetup } from "codemirror";
import { StateField, EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";

export default modifier(function codeMirror(
  element,
  [],
  { readOnly, content, onUpdate }
) {
  if (!element) {
    throw new Error("CodeMirror modifier has no element");
  }

  const listenChangesExtension = StateField.define({
    create: () => null,
    update: async (value, transaction) => {
      if (transaction.docChanged) {
        const _input = transaction.newDoc.toString();
        onUpdate(_input);
      }
      return null;
    },
  });

  const extensions = [basicSetup, javascript(), listenChangesExtension];

  let startState = EditorState.create({
    doc: content,
    extensions,
  });

  const editor = new EditorView({
    state: startState,
    parent: element,
  });

  return () => {
    editor.destroy();
  };
});
