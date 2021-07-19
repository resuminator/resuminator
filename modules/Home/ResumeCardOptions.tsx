import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
  Tooltip,
  useDisclosure
} from "@chakra-ui/react";
import Emoticons from "../../data/Emoticons";
import useUserStore from "../User/store";
import { ResumeMetadata } from "../User/types";

interface ResumeCardOptionProps {
  dataObject: ResumeMetadata;
}

const ResumeCardOptions: React.FC<ResumeCardOptionProps> = ({ dataObject }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const updateActive = useUserStore((state) => state.updateActive);
  const handleInput = (
    dataObject: ResumeMetadata,
    key: string,
    value: string
  ) => {
    updateActive(dataObject.id, key, value);
  };

  return (
    <Popover isOpen={isOpen} onClose={onClose} placement="bottom" matchWidth>
      <PopoverTrigger>
        <Text fontSize="md" my="2" onClick={onOpen} cursor="pointer">
          <Tooltip hasArrow label="Click to edit">
            {dataObject.profileName}
          </Tooltip>
        </Text>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight="semibold">
          <Text textTransform="uppercase" fontSize="xs" color="gray">
            Resume Name
          </Text>
          <Editable
            pb="1"
            defaultValue={dataObject.profileName}
            onSubmit={(value) => handleInput(dataObject, "profileName", value)}
            placeholder="Untitled Resume"
          >
            <EditablePreview
              _hover={{
                borderBottomRadius: "0px",
                borderBottom: "1px",
                borderBottomStyle: "dotted",
                color: "blue.500",
              }}
            />
            <EditableInput my="1" />
          </Editable>
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <SimpleGrid columns={5} spacing="2">
            {Emoticons.map((emoji) => (
              <Button
                size="sm"
                aria-label={emoji}
                key={emoji}
                onClick={() => handleInput(dataObject, "icon", emoji)}
                colorScheme={dataObject.icon === emoji ? "blue" : "gray"}
              >
                {emoji}
              </Button>
            ))}
          </SimpleGrid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ResumeCardOptions;
