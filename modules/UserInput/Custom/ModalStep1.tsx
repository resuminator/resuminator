import {
  Box,
  Button,
  ButtonGroup,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Text,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { BsTextareaT } from "react-icons/bs";
import { MdDateRange, MdRemoveCircle, MdTextFields } from "react-icons/md";
import InputWithLabel from "../../../components/common/InputWithLabel";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import {
  CustomInputFieldsObject,
  CustomSectionObject,
} from "../../../store/types";

interface Props {
  section: CustomSectionObject;
  handler?: (type: CustomInputFieldsObject["type"]) => void;
}

const getIconForField = (type: CustomInputFieldsObject["type"]) => {
  switch (type) {
    case "TEXT":
      return MdTextFields;
    case "DATE":
      return MdDateRange;
    case "DESC":
      return BsTextareaT;
    default:
      return null;
  }
};

const ModalStep1: React.FC<Props> = ({ section, handler }) => {
  return (
    <Fragment>
      <Text fontSize="sm" mb="4">
        For creating a custom section you&apos;ll need a unique name for it and
        select which type of sections you want in it.
      </Text>
      <InputWithLabel
        label="Unique name for section"
        name="header"
        placeholder="Achievements"
      />
      <Text mt="4" mb="2" color="gray.500">
        Click on the section type to add
      </Text>
      <ButtonGroup mb="2">
        <Button
          onClick={() => handler("TEXT")}
          leftIcon={<MdTextFields />}
        >
          Text Field
        </Button>
        <Button
          onClick={() => handler("DATE")}
          leftIcon={<MdDateRange />}
        >
          Date Range
        </Button>
        <Button
          onClick={() => handler("DESC")}
          leftIcon={<BsTextareaT />}
        >
          Text Area
        </Button>
      </ButtonGroup>
      {section.inputFields.map((field) => (
        <Box key={field.id}>
          <Text fontSize="md" pb="2" color="gray.500">
            Field Name
          </Text>
          <InputGroup>
            <InputLeftElement>
              <Icon as={getIconForField(field.type)} />
            </InputLeftElement>
            <Input
              variant="filled"
              shadow="sm"
              colorScheme="gray"
              mb="2"
              id={field.id}
            />
            <InputRightAddon>
              <TooltipIconButton
                label="Remove"
                aria-label="Remove field"
                color="red"
                icon={<MdRemoveCircle />}
              />
            </InputRightAddon>
          </InputGroup>
        </Box>
      ))}
    </Fragment>
  );
};

export default ModalStep1;
