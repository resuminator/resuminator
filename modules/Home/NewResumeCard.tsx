import { Center, Icon, Text } from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";

const NewResumeCard = () => {
  return (
    <Center
      flexDir="column"
      h="10rem"
      w="10rem"
      border="1px solid"
      borderColor="GrayText"
      borderRadius="10px"
      cursor="pointer"
    >
      <Icon as={FiPlusCircle} w={6} h={6} color="Highlight" />
      <Text my="2" color="Highlight" fontWeight="semibold" fontSize="sm">
        Create New Resume
      </Text>
    </Center>
  );
};

export default NewResumeCard;
