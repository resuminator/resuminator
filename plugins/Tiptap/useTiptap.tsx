import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { Content, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";

type OutputFormat = "HTML" | "JSON";

const getFormattedOutput = (editor, format: OutputFormat) =>
  format === "HTML" ? editor.getHTML() : editor.getJSON();

/**
 * Custom hook for using the Tiptap editor and get the contents as output
 * @param {Content} content - Tiptap Content object
 * @param {Object} options - Other options to initialize editor
 * @param {OutputFormat} options.outputFormat - "HTML" | "JSON", Default ="HTML"
 * @param {string} options.placeholder - Placeholder for the editor
 * @returns Tiptap Editor instance and Output in specified format
 */
export const useTiptap = (
  content: Content,
  options: { outputFormat: OutputFormat; placeholder: string } = {
    outputFormat: "HTML",
    placeholder: "",
  }
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
    onUpdate: ({ editor }) => setOutput(editor.getHTML()),
  });
  const [output, setOutput] = useState<Content>(content);

  return { editor, output };
};
