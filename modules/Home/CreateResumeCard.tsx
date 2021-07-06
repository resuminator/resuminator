import { Center, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";

interface CreateResumeCardProps {
  onClick?: () => void;
}

const CreateResumeCard: React.FC<CreateResumeCardProps> = ({ onClick }) => {
  const hoverProps = {
    bg: useColorModeValue("gray.100", "whiteAlpha.100"),
    color: useColorModeValue("blue.500", "blue.300"),
  };

  return (
    <Center
      flexDir="column"
      h="10rem"
      w="10rem"
      border="1px solid"
      borderRadius="10px"
      cursor="pointer"
      color={useColorModeValue("gray.600", "whiteAlpha.600")}
      _hover={hoverProps}
      transition="0.2s all"
      onClick={onClick}
    >
      <Icon as={FiPlusCircle} w={6} h={6} />
      <Text my="2" fontWeight="semibold" fontSize="sm">
        Create New Resume
      </Text>
    </Center>
  );
};

export default CreateResumeCard;
