import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FiExternalLink, FiThumbsUp } from "react-icons/fi";
import { SectionHints } from "../../data/Hints/types";
import { CONTRIBUTE_HINTS } from "../../data/RefLinks";
import { getUniqueID } from "../../utils";

interface Props {
  hintsData: SectionHints;
}

const HintsModal: React.FC<Props & Omit<ModalProps, "children">> = ({
  isOpen,
  onClose,
  hintsData,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minW="lg">
        <ModalHeader>{hintsData.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {hintsData.content.map((block) => (
            <Text as={block.type} key={getUniqueID()}>
              {block.body}
            </Text>
          ))}
        </ModalBody>
        <ModalFooter justifyContent="space-between">
          <Button
            as="a"
            href={CONTRIBUTE_HINTS}
            target="_blank"
            rightIcon={<FiExternalLink />}
            colorScheme="gray"
            variant="link"
            size="sm"
            fontWeight="normal"
          >
            Know some more tips? Contribute them here
          </Button>
          <Button
            mr={3}
            onClick={onClose}
            rightIcon={<FiThumbsUp />}
            colorScheme="blue"
          >
            Got it
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default HintsModal;
