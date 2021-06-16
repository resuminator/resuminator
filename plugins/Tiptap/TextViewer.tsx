import { Box } from "@chakra-ui/layout";
import { Content, EditorContent } from "@tiptap/react";
import { useEffect } from "react";
import { useViewer } from "./hooks/useViewer";

export interface TiptapProps {
  content: Content | string;
}

const TextViewer: React.FC<TiptapProps> = ({ content, ...props }) => {
  const editor = useViewer(content);

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  return (
    <Box {...props}>
      <EditorContent editor={editor} />
    </Box>
  );
};

export default TextViewer;
