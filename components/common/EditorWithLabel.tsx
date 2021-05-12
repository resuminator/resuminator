import { Text } from "@chakra-ui/layout";
import { Content } from "@tiptap/core";
import React, { Fragment, useEffect } from "react";
import Tiptap, { useTiptap } from "../../plugins/Tiptap";

interface Props {
  label: string;
  content: Content;
  onChange?: React.Dispatch<React.SetStateAction<any>>;
}

const EditorWithLabel: React.FC<Props> = ({
  label,
  content,
  onChange,
}) => {
  const { editor, output } = useTiptap(content, {
    outputFormat: "HTML",
    placeholder: "Describe your role and achievements...",
  });

  useEffect(() => {
    console.log(output);
    onChange((item) => ({ ...item, description: output }));
  }, [onChange, output]);

  return (
    <Fragment>
      <Text fontSize="md" pb="2" color="gray.500">
        {label}
      </Text>
      <Tiptap editor={editor} />
    </Fragment>
  );
};

export default EditorWithLabel;
