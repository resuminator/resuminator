import { Text, VStack } from "@chakra-ui/react";
import React from "react";

interface Props {
  title?: string;
  subtitle?: string;
}

const SubSection: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <VStack align={"start"} mb="4">
      {title && (
        <Text fontSize={"sm"} fontWeight={"bold"}>
          {title}
        </Text>
      )}
      {subtitle && (
        <Text fontSize={"xs"} color="gray.500">
          {subtitle}
        </Text>
      )}
    </VStack>
  );
};

export default SubSection;
