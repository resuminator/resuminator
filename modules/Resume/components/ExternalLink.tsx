import Icon from "@chakra-ui/icon";
import { Text, TextProps } from "@chakra-ui/layout";
import { ComponentWithAs } from "@chakra-ui/system";
import React, { useContext } from "react";
import { FiExternalLink } from "react-icons/fi";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const ExternalLink: ComponentWithAs<"p", TextProps> = ({ ...props }) => {
  const { fontSize, ...rest } = useContext(StylePropsContext).titleRowProps;
  const hoverProps = props.href && {
    _hover: { textDecoration: "underline" },
    transition: "0.2s all",
  };

  return props.href ? (
    <Text fontSize="sm" pb="2" {...rest} {...hoverProps} {...props}>
      Link
      <span>
        <Icon as={FiExternalLink} mx="1" height="0.8rem" />
      </span>
    </Text>
  ) : null;
};

export default ExternalLink;
