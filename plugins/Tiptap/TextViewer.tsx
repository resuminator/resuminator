import { Content, EditorContent } from "@tiptap/react";
import { useEffect } from "react";
import { useViewer } from "./hooks/useViewer";

export interface TiptapProps {
  content: Content;
}

const TextViewer: React.FC<TiptapProps> = ({ content }) => {
  const editor = useViewer(content);

  useEffect(() => {
    if(editor){
      editor.commands.setContent(content);
    }
  }, [editor, content])

  return <EditorContent editor={editor} />;
};

export default TextViewer;
