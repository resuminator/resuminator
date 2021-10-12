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
          mb: "2"
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
