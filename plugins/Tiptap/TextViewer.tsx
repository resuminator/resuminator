import { Box } from "@chakra-ui/layout";
import { Content, EditorContent } from "@tiptap/react";
import { useEffect } from "react";
import Fonts from "../../modules/Design/FontLegend";
import useResumeStore from "../../store/resume.store";
import { useViewer } from "./hooks/useViewer";

export interface TiptapProps {
  content: Content;
}

const TextViewer: React.FC<TiptapProps> = ({ content }) => {
  const editor = useViewer(content);
  const { family } = Fonts[useResumeStore((state) => state.fontProfile)];

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(content);
    }
  }, [editor, content]);

  return (
    <Box
      sx={{
        ".ProseMirror.viewer": {
          fontFamily: family.secondary,
        },
      }}
    >
      <EditorContent editor={editor} />
    </Box>
  );
};

export default TextViewer;
