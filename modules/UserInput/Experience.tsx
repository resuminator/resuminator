import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { Editor } from "@tiptap/react";
import React, { Fragment, useEffect, useState } from "react";
import Section from "../../components/layouts/Section";
import Tiptap, { useTiptap } from "../../plugins/Tiptap";
import SectionControls, { SectionProperties } from "./SectionControls";

interface ExperienceDataObject {
  jobTitle?: string;
  company?: string;
  location?: string;
  description?: string;
  link?: string;
  tags?: Array<string>;
  start?: Date;
  end?: Date;
  isHidden?: boolean;
}

interface ComponentDataObject extends ExperienceDataObject {
  isExpanded?: boolean;
}

type DataState = Array<ComponentDataObject>;

enum ElementTypes {
  INPUT,
  DESCRIPTION,
  DATE,
}

interface CardProps {
  label?: string;
  name?: string;
  type?: ElementTypes;
  placeholder?: string;
}

const ExpandedCardChildren: Array<CardProps> = [
  {
    label: "Job Title",
    name: "jobTitle",
    type: ElementTypes.INPUT,
    placeholder: "Rocket Scientist",
  },
  {
    label: "Organization",
    name: "company",
    type: ElementTypes.INPUT,
    placeholder: "Tesla",
  },
  {
    label: "Location",
    name: "location",
    type: ElementTypes.INPUT,
    placeholder: "Start typing to search location",
  },
  {
    label: "Description",
    name: "description",
    type: ElementTypes.DESCRIPTION,
  },
  {
    label: "Link",
    name: "link",
    type: ElementTypes.INPUT,
  },
  {
    label: "Tags",
    name: "tags",
    type: ElementTypes.INPUT,
    placeholder: "Separate keywords by commas",
  },
];

const getExperienceCardChild = (
  item: CardProps,
  plugins: { editor: Editor }
) => {
  switch (item.type) {
    case ElementTypes.INPUT:
      return (
        <Fragment>
          <Text fontSize="md" pb="2" color="gray.500">
            {item.label}
          </Text>
          <Input
            variant="filled"
            name={item.name}
            shadow="sm"
            colorScheme="gray"
            mb="2"
            placeholder={item.placeholder}
          />
        </Fragment>
      );
    case ElementTypes.DESCRIPTION:
      return (
        <Fragment>
          <Text fontSize="md" pb="2" color="gray.500">
            {item.label}
          </Text>
          <Tiptap editor={plugins.editor} />
        </Fragment>
      );
    case ElementTypes.DATE:
      return <Fragment>Date</Fragment>;
    default:
      return null;
  }
};

const Experience = () => {
  const [properties, setProperties] = useState<SectionProperties>({
    isHidden: false,
  });
  const { editor, output } = useTiptap("", {
    outputFormat: "JSON",
    placeholder: "Describe your role and achievements...",
  });
  const [data, setData] = useState<DataState>([]);

  useEffect(() => console.log(output), [output]);

  return (
    <Section
      header={{
        title: "Work Experience",
        subtitle: "Add your recent work experiences and internships.",
        mb: "2",
      }}
    >
      <SectionControls handler={{ properties, setProperties }} />
      <Box
        p="5"
        mb="2"
        border="1px solid"
        borderRadius="10px"
        shadow="md"
        cursor="pointer"
        _hover={{ bg: "whiteAlpha.100" }}
        transition="all 0.2s"
      >
        <Text>Google Summer of Code &apos;20</Text>
        <Text fontSize="sm" color="GrayText">
          Student Developer @ CERN-HSF
        </Text>
      </Box>
      <Box p="4" mb="2" border="1px solid" borderRadius="10px">
        {ExpandedCardChildren.map((child) =>
          getExperienceCardChild(child, { editor })
        )}
      </Box>
    </Section>
  );
};

export default Experience;
