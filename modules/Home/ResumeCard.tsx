import { Box, Center, Text } from "@chakra-ui/react";
import { ResumeStyleObject } from "../../store/types";

interface ResumeCardProps {
  dataObject: ResumeStyleObject;
  callback: (id: string) => void;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ dataObject, callback }) => {
  return (
    <Center key={dataObject.id} flexDirection="column">
      <Box
        h="10rem"
        w="10rem"
        bg="Highlight"
        _hover={{ shadow: "md", filter: "brightness(80%)" }}
        borderRadius="10px"
        cursor="pointer"
        onClick={() => callback(dataObject.id)}
        transition="all 0.2s"
      >
        {dataObject.profile_name}
      </Box>
      <Text my="2">{dataObject.profile_name}</Text>
    </Center>
  );
};

export default ResumeCard;
