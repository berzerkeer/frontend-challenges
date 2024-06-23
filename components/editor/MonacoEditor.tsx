import { useTheme } from "next-themes";
import React, { useEffect } from "react";
import Editor, { useMonaco } from "@monaco-editor/react";
import { useActiveCode, useSandpack } from "@codesandbox/sandpack-react";

type MonacoEditorProps = {
  path?: string;
};

export function MonacoEditor(props: MonacoEditorProps) {
  const { path = "" } = props;
  const monaco = useMonaco();
  const { code, updateCode } = useActiveCode();
  const { sandpack } = useSandpack();
  const { files } = sandpack;
  const { theme } = useTheme();

  useEffect(() => {
    if (monaco) {
      Object.keys(files).forEach((file) => {
        if (monaco.editor.getModel(monaco.Uri.parse(`${path}${file}`))) return;

        monaco.editor.createModel(files[file].code, setLanguage(file), monaco.Uri.parse(`${path}${file}`));
      });

      monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);

      monaco.editor.registerEditorOpener({
        openCodeEditor(source, resource) {
          const { path } = resource;

          const model = monaco.editor.getModel(monaco.Uri.parse(path));

          if (!model) return false;

          sandpack.setActiveFile(path.replace(props.path || "", ""));

          return true;
        },
      });
    }
  }, [monaco]);

  if (!monaco) return null;

  return (
    <Editor
      width="100%"
      height="100%"
      path={`${path}${sandpack.activeFile}`}
      language={setLanguage(sandpack.activeFile)}
      theme={`vs-${theme}`}
      value={code}
      options={{
        minimap: { enabled: false },
      }}
      onChange={(value) => updateCode(value || "")}
    />
  );
}

const setLanguage = function (activeFile) {
  switch (activeFile.split(".").pop()) {
    case "js":
      return "javascript";
    case "jsx":
      return "javascript";
    case "ts":
      return "typescript";
    case "css":
      return "css";
    case "html":
      return "html";
    case "json":
      return "json";
    case "md":
      return "markdown";
    default:
      return "plaintext";
  }
};
