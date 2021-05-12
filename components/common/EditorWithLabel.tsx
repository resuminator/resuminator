import { Text } from "@chakra-ui/layout";
import { Editor } from "@tiptap/react";
import React, { Fragment } from "react";
import Tiptap from "../../plugins/Tiptap";

interface Props {
  label: string;
  editor: Editor;
}

const EditorWithLabel: React.FC<Props> = ({ label, editor }) => (
  <Fragment>
    <Text fontSize="md" pb="2" color="gray.500">
      {label}
    </Text>
    <Tiptap editor={editor} />
  </Fragment>
);

export default EditorWithLabel;
