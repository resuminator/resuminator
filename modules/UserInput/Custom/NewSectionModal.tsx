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
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import {
  CustomInputFieldsObject,
  CustomSectionObject,
} from "../../../store/types";
import { getUniqueID } from "../../../utils";
import ModalStep1 from "./ModalStep1";

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
    max: 3,
  });
  const [section, setSection] = useState<CustomSectionObject>({
    header: "",
    inputFields: [],
    layout: [],
  });

  useEffect(() => {
    console.log(section);
  }, [section]);

  const addInputField = (type: CustomInputFieldsObject["type"]) => {
    setSection((nextSection) => ({
      ...nextSection,
      inputFields: [
        ...nextSection.inputFields,
        { id: getUniqueID(), type, name: "" },
      ],
    }));
  };

  const deleteInputField = (id: string) => {
    const newInputFields = section.inputFields.filter((item) => item.id !== id);
    setSection((nextSection) => ({
      ...nextSection,
      inputFields: newInputFields,
    }));
  };

  const getBodyForStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <ModalStep1
            section={section}
            addHandler={addInputField}
            deleteHandler={deleteInputField}
          />
        );
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
            Step {valueAsNumber} of 3
          </Text>
          <ButtonGroup>
            <Button
              leftIcon={<FiArrowLeft />}
              isDisabled={valueAsNumber === 1}
              onClick={() => decrement()}
            >
              Prev Step
            </Button>
            <Button rightIcon={<FiArrowRight />} onClick={() => increment()}>
              Next Step
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewSectionModal;
