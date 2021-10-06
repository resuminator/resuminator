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
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Text
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FiExternalLink, FiThumbsUp } from "react-icons/fi";
import { SectionHints } from "../../data/Hints/types";
import { CONTRIBUTE_HINTS } from "../../data/RefLinks";
import mp from "../../services/mixpanel";
import { getUniqueID } from "../../utils";

interface Props {
  hintsData: SectionHints;
}

const HintsModal: React.FC<Props & Omit<ModalProps, "children">> = ({
  isOpen,
  onClose,
  hintsData
}) => {
  useEffect(() => {
    mp.track("Hints Modal Open", { title: hintsData.title });
  }, [hintsData.title]);

  const trackMetric = () => {
    mp.track("External Link Trigger", {
      from: hintsData.title,
      to: CONTRIBUTE_HINTS
    });
  };

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
            onClick={trackMetric}
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
