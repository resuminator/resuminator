import { Editor, EditorContent } from "@tiptap/react";
import MenuBar from "./MenuBar";
import { useTiptap } from "./useTiptap";

interface TiptapProps {
  editor: Editor;
}

const Tiptap: React.FC<TiptapProps> = ({ editor }) => {
  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
export { useTiptap };

