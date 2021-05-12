import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { Content, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";

type OutputFormat = "HTML" | "JSON";
type Output = string | Record<string, any>;

const getFormattedOutput = (editor, format: OutputFormat) =>
  format === "HTML" ? editor.getHTML() : editor.getJSON();

/**
 * Custom hook for using the Tiptap editor and get the contents as output
 * @param content Tiptap Content object
 * @param format OutputFormat = "HTML" | "JSON". Default = "HTML"
 * @returns Tiptap Editor instance and Output in specified format
 */
export const useTiptap = (content: Content, format: OutputFormat = "HTML") => {
  const [output, setOutput] = useState<Output>({});
  const editor = useEditor({
    extensions: [StarterKit, Typography, Placeholder, TextAlign, Link],
    content,
    onUpdate: ({ editor }) => setOutput(getFormattedOutput(editor, format)),
  });

  return { editor, output };
};
