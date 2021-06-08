import { BoxProps } from "@material-ui/core";
import React, { useContext } from "react";
import TextViewer, { TiptapProps } from "../../../plugins/Tiptap/TextViewer";
import useResumeStore from "../../../store/resume.store";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const BodyText: React.FC<TiptapProps & BoxProps> = ({ content, ...props }) => {
  const bodyProps = useContext(StylePropsContext).bodyProps;
  const spacing = useResumeStore((state) => state.spacing);

  const bodyTextProps: BoxProps = {
    "aria-label": "Body Text",
    my: spacing * 2,
    ...props,
  };

  return <TextViewer content={content} {...bodyProps} {...bodyTextProps} />;
};

export default BodyText;
