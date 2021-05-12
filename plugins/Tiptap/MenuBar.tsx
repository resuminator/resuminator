import { ButtonGroup } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import { Editor } from "@tiptap/react";
import React from "react";
import {
  FaAlignJustify,
  FaAlignLeft,
  FaBold,
  FaItalic,
  FaListOl,
  FaListUl
} from "react-icons/fa";
import TooltipIconButton from "../../components/common/TooltipIconButton";
interface Props {
  editor: Editor;
}

const MenuBar: React.FC<Props> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <HStack spacing="2">
      <ButtonGroup isAttached>
        <TooltipIconButton
          label="Bold"
          variant={editor.isActive("bold") ? "solid" : "outline"}
          size="xs"
          aria-label="Bold-Text"
          icon={<FaBold />}
          onClick={() => editor.chain().focus().toggleBold().run()}
          colorScheme={editor.isActive("bold") ? "blue" : "gray"}
        />
        <TooltipIconButton
          label="Italics"
          variant={editor.isActive("italic") ? "solid" : "outline"}
          size="xs"
          aria-label="Italics-Text"
          icon={<FaItalic />}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          colorScheme={editor.isActive("italic") ? "blue" : "gray"}
        />
      </ButtonGroup>
      <ButtonGroup isAttached>
        <TooltipIconButton
          label="Bullet List"
          variant={editor.isActive("bulletList") ? "solid" : "outline"}
          size="xs"
          aria-label="Bullet-List"
          icon={<FaListUl />}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          colorScheme={editor.isActive("bulletList") ? "blue" : "gray"}
        />
        <TooltipIconButton
          label="Numbered List"
          variant={editor.isActive("orderedList") ? "solid" : "outline"}
          size="xs"
          aria-label="Numbered-List"
          icon={<FaListOl />}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          colorScheme={editor.isActive("orderedList") ? "blue" : "gray"}
        />
      </ButtonGroup>
      <ButtonGroup isAttached>
        <TooltipIconButton
          label="Left Align"
          variant={editor.isActive({ textAlign: "left" }) ? "solid" : "outline"}
          size="xs"
          aria-label="Justify-Text"
          icon={<FaAlignLeft />}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          colorScheme={editor.isActive({ textAlign: "left" }) ? "blue" : "gray"}
        />
        <TooltipIconButton
          label="Justify"
          variant={
            editor.isActive({ textAlign: "justify" }) ? "solid" : "outline"
          }
          size="xs"
          aria-label="Justify"
          icon={<FaAlignJustify />}
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          colorScheme={
            editor.isActive({ textAlign: "justify" }) ? "blue" : "gray"
          }
        />
      </ButtonGroup>
    </HStack>
  );
};

export default MenuBar;
