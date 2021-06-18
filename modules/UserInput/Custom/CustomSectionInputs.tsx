import { useDisclosure } from "@chakra-ui/react";
import React, { Fragment } from "react";
import Section from "../../../components/layouts/Section";
import { useCustomSectionStore } from "./store";

const CustomSectionInputs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const customSections = useCustomSectionStore((state) => state.sections);

  return (
    <Fragment>
      {customSections.map((section) => (
        <Section
          key={section.header}
          header={{
            title: section.header,
            mb: "2",
          }}
        ></Section>
      ))}
    </Fragment>
  );
};

export default CustomSectionInputs;
