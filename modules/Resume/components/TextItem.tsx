import { useColorMode } from "@chakra-ui/color-mode";
import { Text, TextProps } from "@chakra-ui/layout";
import { ComponentWithAs } from "@chakra-ui/system";
import React, { useContext } from "react";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const TextItem: ComponentWithAs<"p", TextProps> = ({ children, ...rest }) => {
  const { body } = useContext(StylePropsContext).font;
  const colorMode = useColorMode().colorMode;

  return (
    <Text
      color={colorMode === "light" ? "gray.600" : "gray.400"}
      {...body}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default TextItem;
