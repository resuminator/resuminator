import { Text, TextProps } from "@chakra-ui/layout";
import React from "react";

interface Props {
  owner?: string;
}

const Copyright: React.FC<Props & TextProps> = ({
  owner = "Resuminator",
  ...props
}) => {
  const date = new Date();
  return (
    <Text alignSelf="center" fontSize="sm" color="whiteAlpha.900" {...props}>
      Copyright &copy; {date.getFullYear()} {owner}
    </Text>
  );
};

export default Copyright;
