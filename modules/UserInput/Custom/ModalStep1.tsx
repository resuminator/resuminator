/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import {
  Box,
  Button,
  ButtonGroup,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Text
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { BsTextareaT } from "react-icons/bs";
import { MdDateRange, MdRemoveCircle, MdTextFields } from "react-icons/md";
import InputWithLabel from "../../../components/common/InputWithLabel";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import { CustomSectionInputObject, CustomSectionObject } from "./types";

export type InputHandlerFn = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface Props {
  section: CustomSectionObject;
  onChangeHandlers: { header: InputHandlerFn; field: InputHandlerFn };
  addHandler: (type: CustomSectionInputObject["type"]) => void;
  deleteHandler: (id: string) => void;
}

const getIconForField = (type: CustomSectionInputObject["type"]) => {
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

const getPlaceholder = (type: CustomSectionInputObject["type"]) => {
  switch (type) {
    case "TEXT":
      return "";
    case "DATE":
      return "Start Date";
    case "DESC":
      return "Description";
    default:
      return "";
  }
};

const InputFieldButtonGroup: React.FC<{
  addHandler: Props["addHandler"];
  checkDisabled: (type: CustomSectionInputObject["type"]) => boolean;
}> = ({ addHandler, checkDisabled }) => (
  <Fragment>
    <Text mt="4" mb="2" color="gray.500">
      Click on the section type to add
    </Text>
    <ButtonGroup mb="2">
      <Button onClick={() => addHandler("TEXT")} leftIcon={<MdTextFields />}>
        Text Field
      </Button>
      <Button
        isDisabled={checkDisabled("DATE")}
        onClick={() => addHandler("DATE")}
        leftIcon={<MdDateRange />}
      >
        Date Range
      </Button>
      <Button
        isDisabled={checkDisabled("DESC")}
        onClick={() => addHandler("DESC")}
        leftIcon={<BsTextareaT />}
      >
        Text Area
      </Button>
    </ButtonGroup>
  </Fragment>
);

const ModalStep1: React.FC<Props> = ({
  section,
  onChangeHandlers,
  addHandler,
  deleteHandler
}) => {
  const checkDisabled = (type: CustomSectionInputObject["type"]) =>
    section.inputs.filter((item) => item.type === type).length > 0;

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
        value={section.header}
        onChange={onChangeHandlers.header}
      />
      <InputFieldButtonGroup
        addHandler={addHandler}
        checkDisabled={checkDisabled}
      />
      {section.inputs.map((field) => (
        <Box key={field._id}>
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
              id={field._id}
              value={field.name}
              onChange={onChangeHandlers.field}
              placeholder={getPlaceholder(field.type)}
            />
            <InputRightAddon>
              <TooltipIconButton
                label="Remove"
                aria-label="Remove field"
                color="red"
                icon={<MdRemoveCircle />}
                onClick={() => deleteHandler(field._id)}
              />
            </InputRightAddon>
          </InputGroup>
        </Box>
      ))}
    </Fragment>
  );
};

export default ModalStep1;
