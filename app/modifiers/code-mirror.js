import { modifier } from "ember-modifier";

import { EditorView, basicSetup } from "codemirror";
import { StateField, EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
import { autocompletion } from "@codemirror/autocomplete";
import { showPanel } from "@codemirror/view";

function myCompletions(context) {
  let word = context.matchBefore(/\w*/);
  if (word.from == word.to && !context.explicit) return null;
  return {
    from: word.from,
    options: [
      { label: "match", type: "keyword" },
      { label: "hello", type: "variable", info: "(World)" },
      { label: "magic", type: "text", apply: "⠁⭒*.✩.*⭒⠁", detail: "macro" },
      {
        label: "j.callExpression",
        type: "function",
        info: "j.callExpression(expression)",
        apply: "j.callExpression()",
      },
      {
        label: ".findFunctionDeclarations",
        type: "function",
        info: "j.findFunctionDeclarations(name?: string)",
        apply: "findFunctionDeclarations('foo')",
      },
    ],
  };
}

export default modifier(function codeMirror(
  element,
  [], // eslint-disable-line
  { content, onUpdate, mode, helperText }
) {
  if (!element) {
    throw new Error("CodeMirror modifier has no element");
  }

  function createHelpPanel() {
    let dom = document.createElement("div");
    dom.textContent = helperText;
    dom.className = "cm-help-panel";
    return { top: true, dom };
  }

  const helpTheme = EditorView.baseTheme({
    ".cm-help-panel": {
      padding: "5px 10px",
      backgroundColor: "#fffa8f",
      fontFamily: "monospace",
    },
  });

  const helpPanelState = StateField.define({
    create: () => true,
    provide: (f) => showPanel.from(f, (on) => (on ? createHelpPanel : null)),
  });
  function helpPanel() {
    return [helpPanelState, helpTheme];
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

  const extensions = [
    basicSetup,
    listenChangesExtension,
    autocompletion({ override: [myCompletions] }),
  ];

  if (helperText) {
    extensions.push(helpPanel());
  }
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
