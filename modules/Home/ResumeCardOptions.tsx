import {
    Button, Editable,
    EditableInput,
    EditablePreview, PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader, SimpleGrid,
    Text
} from "@chakra-ui/react";
import Emoticons from "../../data/Emoticons";
import { ResumeMetadata } from "../User/types";

interface ResumeCardOptionProps {
  dataObject: ResumeMetadata;
  onSubmit?: (value: string) => void;
  onSelect?: (value: string) => void;
}

const ResumeCardOptions: React.FC<ResumeCardOptionProps> = ({
  dataObject,
  onSubmit,
  onSelect,
}) => {
  return (
    <PopoverContent>
      <PopoverHeader fontWeight="semibold">
        <Text textTransform="uppercase" fontSize="xs" color="gray">
          Resume Name
        </Text>
        <Editable
          pb="1"
          defaultValue={dataObject.profileName}
          onSubmit={onSubmit}
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
              onClick={() => onSelect(emoji)}
              colorScheme={dataObject.icon === emoji ? "blue" : "gray"}
            >
              {emoji}
            </Button>
          ))}
        </SimpleGrid>
      </PopoverBody>
    </PopoverContent>
  );
};

export default ResumeCardOptions;
