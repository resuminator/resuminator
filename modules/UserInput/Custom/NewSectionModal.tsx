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
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useCounter,
  useToast
} from "@chakra-ui/react";
import produce from "immer";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCheck } from "react-icons/fi";
import { getUniqueID } from "../../../utils";
import ModalStep1 from "./ModalStep1";
import ModalStep2 from "./ModalStep2";
import { useCustomSectionStore } from "./store";
import { CustomSectionInputObject, CustomSectionObject } from "./types";

interface NewSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewSectionModal: React.FC<NewSectionModalProps> = ({
  isOpen,
  onClose
}) => {
  const { valueAsNumber, increment, decrement, reset } = useCounter({
    defaultValue: 1,
    min: 1,
    max: 2
  });
  const initialSectionState: CustomSectionObject = {
    _id: getUniqueID(),
    header: "",
    hasTitleRow: true,
    inputs: [],
    data: [],
    layout: []
  };

  const [section, setSection] =
    useState<CustomSectionObject>(initialSectionState);
  const sections = useCustomSectionStore((state) => state.sections);
  const addSection = useCustomSectionStore((state) => state.addSection);
  const toast = useToast();

  const isValidHeader = (value: string) =>
    /^[ A-Za-z]+$/.test(value) &&
    !sections
      .map((item) => item.header.toUpperCase())
      .includes(value.toUpperCase());

  const isDisabled = !isValidHeader(section.header) || !section.inputs.length;

  const getDefaultName = (type: CustomSectionInputObject["type"]) => {
    switch (type) {
      case "DATE":
        return "Duration";
      case "DESC":
        return "Description";
      default:
        return "";
    }
  };

  const addInputField = (type: CustomSectionInputObject["type"]) => {
    const id = getUniqueID();
    setSection((nextSection) => ({
      ...nextSection,
      inputs: [
        ...nextSection.inputs,
        { _id: id, type, name: getDefaultName(type) }
      ],
      layout: [...nextSection.layout, [id]]
    }));
  };

  const deleteInputField = (id: string) => {
    const nextInputs = section.inputs.filter((item) => item._id !== id);
    const nextLayout = section.layout
      .map((subArr) =>
        subArr.includes(id) ? subArr.filter((e) => e !== id) : subArr
      )
      .filter((item) => item.length);

    setSection((nextSection) => ({
      ...nextSection,
      inputs: nextInputs,
      layout: nextLayout
    }));
  };

  const handleHeaderInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSection((nextSection) => ({ ...nextSection, header: e.target.value }));
  };

  const handleFieldInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const index = section.inputs.map((item) => item._id).indexOf(id);

    //Mutably modifying the next state using Immer (https://immerjs.github.io/immer/produce#example)
    const nextData = produce(section.inputs, (draft) => {
      draft[index].name = e.target.value;
    });
    setSection((nextState) => ({ ...nextState, inputs: nextData }));
  };

  const performConfirmActions = () => {
    addSection(section);
    onClose();
    reset();
    setSection(initialSectionState);
    toast({
      title: "New Custom Section Added",
      description:
        "Manage section properties in user settings. You can add a maximum of 3 custom sections",
      status: "info",
      isClosable: true,
      duration: 3000
    });
  };

  const getBodyForStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <ModalStep1
            section={section}
            onChangeHandlers={{
              header: handleHeaderInput,
              field: handleFieldInput
            }}
            addHandler={addInputField}
            deleteHandler={deleteInputField}
          />
        );
      case 2:
        return <ModalStep2 section={section} />;
      default:
        return null;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minW="xl">
        <ModalHeader>Create a new custom section</ModalHeader>
        <ModalBody>{getBodyForStep(valueAsNumber)}</ModalBody>
        <ModalFooter justifyContent="space-between">
          <Text fontWeight="medium" color="gray.400">
            Step {valueAsNumber} of 2
          </Text>
          <ButtonGroup>
            <Button
              leftIcon={<FiArrowLeft />}
              isDisabled={valueAsNumber === 1}
              onClick={() => decrement()}
            >
              Prev Step
            </Button>
            {valueAsNumber === 2 ? (
              <Button
                colorScheme="green"
                rightIcon={<FiCheck />}
                onClick={performConfirmActions}
              >
                Confirm
              </Button>
            ) : (
              <Button
                rightIcon={<FiArrowRight />}
                isDisabled={isDisabled}
                onClick={() => increment()}
              >
                Next Step
              </Button>
            )}
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewSectionModal;
