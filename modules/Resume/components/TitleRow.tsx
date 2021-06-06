import Icon from "@chakra-ui/icon";
import { Text, TextProps } from "@chakra-ui/layout";
import { ComponentWithAs } from "@chakra-ui/system";
import React, { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const TitleRow: ComponentWithAs<"p", TextProps> = ({ children, ...props }) => {
  const titleRowProps = useContext(StylePropsContext).titleRowProps;
  const hoverProps = props.href && {
    _hover: { textDecoration: "underline" },
    transition: "0.2s all",
  };
  
  return (
    <Text aria-label="Title Row" {...titleRowProps} {...props} {...hoverProps}>
      {children}
      {props.href && (
        <span>
          <Icon as={FiExternalLink} mx="1" height="0.8rem" />
        </span>
      )}
    </Text>
  );
};

export default TitleRow;
