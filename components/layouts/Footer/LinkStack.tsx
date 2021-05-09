import { Stack, StackProps } from "@chakra-ui/layout";
import React from "react";
import LinkText from "../../common/LinkText";

interface Props {
  links?: Array<{ label?: string; link?: string }>;
}

const LinkStack: React.FC<Props & StackProps> = ({ links, ...props }) => {
  return (
    <Stack
      py={{ base: "4", md: "0" }}
      spacing={{ base: "2", md: "8" }}
      color="whiteAlpha.900"
      direction={{ base: "column", md: "row" }}
      {...props}
    >
      {links.map((item) => (
        <LinkText key={item.label} href={item.link} fontWeight="medium">
          {item.label}
        </LinkText>
      ))}
    </Stack>
  );
};

export default LinkStack;
