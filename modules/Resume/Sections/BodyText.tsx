import { BoxProps } from "@material-ui/core";
import React, { useContext } from "react";
import TextViewer, { TiptapProps } from "../../../plugins/Tiptap/TextViewer";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const BodyText: React.FC<TiptapProps & BoxProps> = ({ content, ...props }) => {
  const bodyProps = useContext(StylePropsContext).bodyProps;
  return <TextViewer content={content} {...bodyProps} {...props} />;
};

export default BodyText;
