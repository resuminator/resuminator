import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import React, { Fragment } from "react";
import Layout from "../components/layouts";
import {
  Certification,
  Contact,
  Education,
  Experience,
  NameAndJobTitle,
  Projects,
  Publications,
  Skills,
} from "../modules/UserInput";
import Viewer from "../modules/Viewer";
import useResumeStore from "../store/resume.store";
import { InputSectionKeys } from "../store/types";

const getInputSection = (key: InputSectionKeys) => {
  switch (key) {
    case "EDUCATION":
      return <Education />;
    case "EXPERIENCE":
      return <Experience />;
    case "PROJECTS":
      return <Projects />;
    case "CERTIFICATIONS":
      return <Certification />;
    case "PUBLICATIONS":
      return <Publications />;
    case "SKILLS":
      return <Skills />;
  }
};

const Create: NextPage = () => {
  const inputs = useResumeStore((state) => state.properties.inputs);
  return (
    <Layout display="flex" flexDir="column" alignItems="center" w="100%">
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        width="100%"
        px="0"
        py="5"
      >
        <Box aria-label="Resume Inputs" flexBasis="50%">
          <NameAndJobTitle />
          <Contact />
          {inputs.map((key) => (
            <Fragment key={key}>{getInputSection(key)}</Fragment>
          ))}
        </Box>
        <Box aria-label="Resume Preview" flexBasis="50%">
          <Viewer />
        </Box>
      </Box>
    </Layout>
  );
};

export default Create;
