import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { UserObject } from "../../User/types";
import CreateResumeBody from "./CreateResumeBody";
import CreateResumeFooter from "./CreateResumeFooter";

interface CreateResumeModalProps {
  data: UserObject;
  options: { isOpen: boolean; onClose: () => void };
}

export type Method = "EXISTING" | "SCRATCH" | null;

const CreateResumeModal: React.FC<CreateResumeModalProps> = ({
  data,
  options,
}) => {
  const [method, setMethod] = useState<Method>(null);
  const { isOpen, onClose } = options;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minW="2xl">
        <ModalCloseButton />
        <ModalHeader>
          <Text>Create new resume</Text>
          <Text
            fontSize="sm"
            color={useColorModeValue("gray", "whiteAlpha")}
            fontWeight="normal"
          >
            Select one to get started
          </Text>
        </ModalHeader>
        <CreateResumeBody data={data} method={method} callback={setMethod} />
        <CreateResumeFooter method={method} onCloseCallback={onClose} />
      </ModalContent>
    </Modal>
  );
};

export default CreateResumeModal;
