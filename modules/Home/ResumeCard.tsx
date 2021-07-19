import {
  Center,
  Editable,
  EditableInput,
  EditablePreview,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { isCustom } from "../Design/Colors/ColorSelector";
import { ResumeMetadata } from "../User/types";

interface ResumeCardProps {
  dataObject: ResumeMetadata;
  callback: (id: string) => void;
  onSubmit?: (value: string) => void;
}

const ResumeCard: React.FC<ResumeCardProps> = ({
  dataObject,
  callback,
  onSubmit,
}) => {
  const primaryColor = isCustom(dataObject.color)
    ? dataObject.color
    : `${dataObject.color}.500`;

  return (
    <Center key={dataObject.id} flexDirection="column">
      <Center
        h="10rem"
        w="10rem"
        bg={primaryColor}
        _hover={{ shadow: "md", filter: "brightness(80%)" }}
        borderRadius="10px"
        cursor="pointer"
        onClick={() => callback(dataObject.id)}
        transition="all 0.2s"
      >
        <Text fontSize="4xl">{dataObject.icon}</Text>
      </Center>

      <Editable
        my="2"
        p="1"
        defaultValue={dataObject.profileName}
        width="10rem"
        textAlign="center"
        onSubmit={onSubmit}
        placeholder="Untitled Resume"
      >
        <Tooltip label="Click to edit" hasArrow>
          <EditablePreview />
        </Tooltip>
        <EditableInput />
      </Editable>
    </Center>
  );
};

export default ResumeCard;
