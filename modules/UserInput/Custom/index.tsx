import { Button, ButtonGroup, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { FiPlus } from "react-icons/fi";
import Section from "../../../components/layouts/Section";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { useCustomSectionStore } from "./store";
const NewSectionModal = dynamic(() => import("./NewSectionModal"));

const CustomSections = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const customSections = useCustomSectionStore((state) => state.sections);
  const { createToast } = useCustomToast();

  const isDisabled = customSections.length >= 3;

  const handleCreateButton = () => {
    if (isDisabled)
      return createToast(
        "Maximum Limit Reached!",
        "error",
        "You can add a maximum of 3 custom sections. Try modifying or deleting existing sections."
      );

    return onOpen();
  };

  return (
    <>
      <Section
        header={{
          title: "Custom Sections",
          subtitle: "Create and manage your custom sections for this resume",
          mb: "2",
        }}
      >
        <ButtonGroup my="2">
          <Button
            colorScheme="purple"
            leftIcon={<FiPlus />}
            onClick={handleCreateButton}
          >
            Create new section
          </Button>
        </ButtonGroup>
      </Section>
      <NewSectionModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CustomSections;
