import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { Content, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

/**
 * Custom hook for using the Tiptap editor and get the contents as output
 * @param {Content} content - Tiptap Content object
 * @returns Tiptap Editor instance and Output in specified format
 */
export const useViewer = (content: Content) => {
  const editor = useEditor({
    extensions: [StarterKit, Typography, TextAlign, Link],
    content,
    editable: false,
    editorProps: {
      attributes: {
        class: "viewer"
      }
    },
  });

  return editor;
};
