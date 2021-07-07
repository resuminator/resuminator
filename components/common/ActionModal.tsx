import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { ButtonProps } from "@chakra-ui/react";
import { ThemingProps } from "@chakra-ui/system";
import React from "react";

interface Props {
  title: string;
  buttonText: string;
  color?: ThemingProps["colorScheme"];
  onClose?: () => void;
  onClick?: () => void;
  isOpen?: boolean;
  actionButtonProps?: ButtonProps;
}

const ActionModal: React.FC<Props> = ({
  title,
  onClose,
  isOpen,
  onClick,
  buttonText,
  color = "red",
  actionButtonProps,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <Button
            colorScheme={color}
            mr={3}
            onClick={onClick}
            {...actionButtonProps}
          >
            {buttonText}
          </Button>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ActionModal;
