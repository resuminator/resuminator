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
import { CustomSectionInputObject, CustomSectionObject } from "./types";

interface NewSectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewSectionModal: React.FC<NewSectionModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { valueAsNumber, increment, decrement, reset } = useCounter({
    defaultValue: 1,
    min: 1,
    max: 2,
  });
  const initialSectionState: CustomSectionObject = {
    _id: "",
    header: "",
    hasTitleRow: true,
    inputs: [],
    data: [],
    layout: [],
  };

  const [section, setSection] =
    useState<CustomSectionObject>(initialSectionState);
  const toast = useToast();

  const addInputField = (type: CustomSectionInputObject["type"]) => {
    const id = getUniqueID();
    setSection((nextSection) => ({
      ...nextSection,
      inputs: [...nextSection.inputs, { _id: id, type, name: "" }],
      layout: [...nextSection.layout, [id]],
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
      layout: nextLayout,
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
    onClose();
    reset();
    setSection(initialSectionState);
    toast({
      title: "New Custom Section Added",
      description: "You can manage settings for this section in user settings.",
      status: "info",
      isClosable: true,
      duration: 3000,
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
                onClick={() => performConfirmActions()}
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
