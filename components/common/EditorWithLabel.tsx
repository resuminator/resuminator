import dynamic from 'next/dynamic';
import { Text } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import { TiptapProps } from "../../plugins/Tiptap";
const Tiptap = dynamic(() => import("../../plugins/Tiptap"))

interface Props extends TiptapProps {
  label: string;
}

const EditorWithLabel: React.FC<Props> = ({
  label,
  defaultValue,
  placeholder,
  outputFormat,
  onChange,
}) => {
  return (
    <Fragment>
      <Text fontSize="md" pb="2" color="gray.500">
        {label}
      </Text>
      <Tiptap
        defaultValue={defaultValue}
        placeholder={placeholder}
        outputFormat={outputFormat}
        onChange={onChange}
      />
    </Fragment>
  );
};

export default EditorWithLabel;
