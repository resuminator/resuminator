import { Text, TextProps } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const TitleRow: React.FC<TextProps> = ({ children, ...props }) => {
  const titleRowProps = useContext(StylePropsContext).titleRowProps;
  return <Text {...titleRowProps} {...props}>{children}</Text>;
};

export default TitleRow;
