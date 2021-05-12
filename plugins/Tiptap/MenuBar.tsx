import { ButtonGroup, IconButton } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import { Editor } from "@tiptap/react";
import React from "react";
import { FaBold, FaItalic } from "react-icons/fa";

interface Props {
  editor: Editor;
}

const MenuBar: React.FC<Props> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <HStack spacing="1">
      <ButtonGroup isAttached>
        <IconButton
          variant={editor.isActive("bold") ? "solid" : "outline"}
          size="xs"
          aria-label="Bold-Text"
          icon={<FaBold />}
          onClick={() => editor.chain().focus().toggleBold().run()}
          colorScheme={editor.isActive("bold") ? "blue" : "gray"}
        />
        <IconButton
          variant={editor.isActive("italic") ? "solid" : "outline"}
          size="xs"
          aria-label="Bold-Text"
          icon={<FaItalic />}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          colorScheme={editor.isActive("italic") ? "blue" : "gray"}
        />
      </ButtonGroup>
    </HStack>
  );
};

export default MenuBar;
