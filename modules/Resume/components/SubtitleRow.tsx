import { Text, TextProps } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const SubtitleRow: React.FC<TextProps> = ({ children, ...props }) => {
  const subtitleRowProps = useContext(StylePropsContext).subtitleRowProps;
  return (
    <Text aria-label="Subtitle Row" {...subtitleRowProps} {...props}>
      {children}
    </Text>
  );
};

export default SubtitleRow;
