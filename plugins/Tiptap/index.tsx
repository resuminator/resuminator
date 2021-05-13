import { Content, EditorContent } from "@tiptap/react";
import MenuBar from "./MenuBar";
import { OutputFormat, useTiptap } from "./useTiptap";

export interface TiptapProps {
  defaultValue: Content;
  placeholder?: string;
  onChange?: (value: Content) => void;
  outputFormat?: OutputFormat;
}

const Tiptap: React.FC<TiptapProps> = ({
  defaultValue,
  placeholder = "",
  onChange,
  outputFormat = "HTML",
}) => {
  const content = defaultValue;
  const editor = useTiptap(
    content,
    {
      outputFormat,
      placeholder,
    },
    onChange
  );

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
