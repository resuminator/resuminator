import { Text, TextProps } from "@chakra-ui/layout";
import React from "react";

const SectionName: React.FC<TextProps> = ({ color, children, ...rest }) => {
  const headerStyle: TextProps = {
    color,
    mb: "2",
    ...rest,
  };

  return <Text {...headerStyle}>{children}</Text>;
};

export default SectionName;
