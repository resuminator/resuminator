import { Box, VStack } from "@chakra-ui/layout";
import React from "react";
import useGlobalStore from "../../store/global.store";
import { InputSectionKeys } from "../../store/types";
import {
  CertificationsLayout,
  EducationLayout,
  ExperienceLayout,
  ProjectLayout,
  PublicationsLayout,
  SkillsLayout,
} from "./Layouts";

interface Props {}

const getLayout = (key: InputSectionKeys) => {
  switch (key) {
    case "EDUCATION":
      return <EducationLayout />;
    case "EXPERIENCE":
      return <ExperienceLayout />;
    case "PROJECTS":
      return <ProjectLayout />;
    case "CERTIFICATIONS":
      return <CertificationsLayout />;
    case "PUBLICATIONS":
      return <PublicationsLayout />;
    case "SKILLS":
      return <SkillsLayout />;
  }
};

const ResumePaper = (props: Props) => {
  const { header, body } = useGlobalStore((state) => state.properties.layout);

  return (
    <Box aria-label="Body" display="flex">
      {body.map((row, index) => (
        <Box
          display="flex"
          flexDir="column"
          alignItems="flex-start"
          justifyContent="space-between"
          aria-label={`Column-${index + 1}`}
          key={index}
        >
          {row.map((key) => (
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="space-between"
              aria-label={key}
              key={key}
            >
              {getLayout(key)}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default ResumePaper;
