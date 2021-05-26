import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { Content, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export type OutputFormat = "HTML" | "JSON";

const getFormattedOutput = (editor, format: OutputFormat) =>
  format === "HTML" ? editor.getHTML() : editor.getJSON();

/**
 * Custom hook for using the Tiptap editor and get the contents as output
 * @param {Content} content - Tiptap Content object
 * @param {Object} options - Other options to initialize editor
 * `{ outputFormat: "HTML" | "JSON" , placeholder: string}`
 * @param {Function} onChange - Callback which fires on every change of the editor instance.
 *
 * `(value: Content) => void`
 * @returns Tiptap Editor instance and Output in specified format
 */
export const useTiptap = (
  content: Content,
  options: { outputFormat?: OutputFormat; placeholder: string } = {
    outputFormat: "HTML",
    placeholder: "",
  },
  onChange: (value: Content) => void
) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Typography,
      Placeholder.configure({ placeholder: options.placeholder }),
      TextAlign,
      Link,
    ],
    content,
    onUpdate: ({ editor }) =>
      onChange(getFormattedOutput(editor, options.outputFormat)),
  });

  return editor;
};
