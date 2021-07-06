import { Button, HStack, ModalFooter } from "@chakra-ui/react";
import React from "react";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { Method } from "../CreateResumeModal";

interface Props {
  method: Method;
  onCloseCallback: () => void;
}

const CreateResumeFooter: React.FC<Props> = ({ method, onCloseCallback }) => {
  return (
    <ModalFooter display="flex" justifyContent="space-between">
      <Button
        variant="link"
        rightIcon={<FiExternalLink />}
        _focus={{ outline: "none" }}
        fontWeight="normal"
        size="sm"
      >
        Browse template gallery for more
      </Button>
      <HStack>
        <Button
          colorScheme="purple"
          rightIcon={<FiArrowRight />}
          isDisabled={method === null}
          onClick={() => console.log(method)}
        >
          Get Started
        </Button>
        <Button onClick={onCloseCallback} variant="ghost">
          Cancel
        </Button>
      </HStack>
    </ModalFooter>
  );
};

export default CreateResumeFooter;
