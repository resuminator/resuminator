import { Button, ButtonGroup, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { RiListSettingsFill } from "react-icons/ri";
import Section from "../../../components/layouts/Section";
import NewSectionModal from "./NewSectionModal";

const CustomSectionInput = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Section
      header={{
        title: "Custom Sections",
        subtitle: "Create and manage your custom sections for this resume",
        mb: "2",
      }}
    >
      <ButtonGroup my="2">
        <Button colorScheme="purple" leftIcon={<FiPlus />} onClick={onOpen}>
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

export default CustomSectionInput;
