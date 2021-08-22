import { Text } from "@chakra-ui/react";
import React from "react";

const ListHeader: React.FC = ({ children }) => {
  return (
    <Text fontWeight="500" fontSize="lg" mb={1} color="blue.100">
      {children}
    </Text>
  );
};

export default ListHeader;
