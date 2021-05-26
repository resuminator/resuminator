import { Content, EditorContent } from "@tiptap/react";
import { useViewer } from "./useViewer";

export interface TiptapProps {
  content: Content;
}

const TextViewer: React.FC<TiptapProps> = ({ content }) => {
  const editor = useViewer(content);

  return <EditorContent editor={editor} />;
};

export default TextViewer;
