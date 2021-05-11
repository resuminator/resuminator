import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import Section from "../../components/layouts/Section";
import SectionControls, { SectionProperties } from "./SectionControls";

const Experience = () => {
  const [properties, setProperties] = useState<SectionProperties>({
    isHidden: false,
  });

  return (
    <Section
      header={{
        title: "Work Experience",
        subtitle: "Add your recent work experiences and internships.",
        mb: "2",
      }}
    >
      <SectionControls handler={{ properties, setProperties }} />
      <Box p="4" borderRadius="10px" shadow="sm">
          
      </Box>
    </Section>
  );
};

export default Experience;
