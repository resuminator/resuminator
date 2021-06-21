import { Button, ButtonGroup, useDisclosure, useToast } from "@chakra-ui/react";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { RiListSettingsFill } from "react-icons/ri";
import Section from "../../../components/layouts/Section";
import NewSectionModal from "./NewSectionModal";
import { useCustomSectionStore } from "./store";

const CustomSections = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const customSections = useCustomSectionStore((state) => state.sections);
  const toast = useToast();

  const handleCreateButton = () => {
    if (customSections.length < 3) {
      onOpen();
    } else {
      return toast({
        title: "Maximum Limit Reached!",
        description:
          "You can add a maximum of 3 custom sections. Try modifying or deleting existing sections.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
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
        <Button
          colorScheme="purple"
          variant="ghost"
          leftIcon={<RiListSettingsFill />}
        >
          Manage custom sections
        </Button>
      </ButtonGroup>
      <NewSectionModal isOpen={isOpen} onClose={onClose} />
    </Section>
  );
};

export default CustomSections;
