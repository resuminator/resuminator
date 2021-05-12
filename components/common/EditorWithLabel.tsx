import { Text } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import Tiptap, { TiptapProps } from "../../plugins/Tiptap";

interface Props extends TiptapProps {
  label: string;
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
