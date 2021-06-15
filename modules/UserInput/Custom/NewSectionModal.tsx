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
} from "@chakra-ui/react";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCheck } from "react-icons/fi";
import {
  CustomInputFieldsObject,
  CustomSectionObject,
} from "../../../store/types";
import { getUniqueID } from "../../../utils";
import ModalStep1 from "./ModalStep1";
import ModalStep2 from "./ModalStep2";
import produce from "immer";

interface NewSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewSectionModal: React.FC<NewSectionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { valueAsNumber, increment, decrement } = useCounter({
    defaultValue: 1,
    min: 1,
    max: 2,
  });
  const initialSectionState = {
    header: "",
    inputFields: [],
    layout: [],
  };
  const [section, setSection] =
    useState<CustomSectionObject>(initialSectionState);

  const addInputField = (type: CustomInputFieldsObject["type"]) => {
    const id = getUniqueID();
    setSection((nextSection) => ({
      ...nextSection,
      inputFields: [...nextSection.inputFields, { id, type, name: "" }],
      layout: [...nextSection.layout, [id]],
    }));
  };

  const deleteInputField = (id: string) => {
    const newInputFields = section.inputFields.filter((item) => item.id !== id);
    const newLayout = section.layout
      .map((subArr) =>
        subArr.includes(id) ? subArr.filter((e) => e !== id) : subArr
      )
      .filter((item) => item.length);

    setSection((nextSection) => ({
      ...nextSection,
      inputFields: newInputFields,
      layout: newLayout,
    }));
  };

  const handleHeaderInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSection((nextSection) => ({ ...nextSection, header: e.target.value }));
  const handleFieldInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.id;
    const indexOfField = section.inputFields.map((item) => item.id).indexOf(id);

    //Mutably modifying the next state using Immer (https://immerjs.github.io/immer/produce#example)
    const nextInputFields = produce(section.inputFields, (draft) => {
      draft[indexOfField].name = e.target.value;
    });
    setSection((nextState) => ({ ...nextState, inputFields: nextInputFields }));
  };

  const getBodyForStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <ModalStep1
            section={section}
            onChangeHandlers={{
              header: handleHeaderInput,
              field: handleFieldInput,
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
                onClick={() => {
                  console.log(section);
                  setSection(initialSectionState);
                }}
              >
                Confirm
              </Button>
            ) : (
              <Button rightIcon={<FiArrowRight />} onClick={() => increment()}>
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
