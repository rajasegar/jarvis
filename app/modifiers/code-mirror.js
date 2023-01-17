import { modifier } from "ember-modifier";

import { EditorView, basicSetup } from "codemirror";
import { StateField, EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";

export default modifier(function codeMirror(
  element,
  [], // eslint-disable-line
  { content, onUpdate, mode }
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

  const extensions = [basicSetup, listenChangesExtension];
  if (mode === "js") {
    extensions.push(javascript());
  }
  if (mode === "json") {
    extensions.push(json());
  }

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
