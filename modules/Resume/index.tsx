import { Box } from "@chakra-ui/layout";
import React from "react";
import useGlobalStore from "../../store/global.store";
import { InputSectionKeys } from "../../store/types";
import {
  CertificationsLayout,
  EducationLayout,
  ExperienceLayout,
  ProjectLayout,
  PublicationsLayout,
  SkillsLayout
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
    <Box display="flex" flexDir="column" aria-label="Resume Paper">
      <Box aria-label="Header">Header</Box>
      <Box
        aria-label="Body"
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        width="100%"
      >
        {body.map((rowAsColumn, index) => (
          <Box
            display="flex"
            flexDir="column"
            aria-label={`Column-${index + 1}`}
            key={index}
            flexBasis={`${(1 / body.length) * 100}%`}
          >
            {rowAsColumn.map((layoutKey) => (
              <Box
                display="flex"
                aria-label={layoutKey}
                key={layoutKey}
                width="100%"
              >
                {getLayout(layoutKey)}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ResumePaper;
