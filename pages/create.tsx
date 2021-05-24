import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import React from "react";
import Layout from "../components/layouts";
import {
  Certification,
  Contact,
  Education,
  Experience,
  NameAndJobTitle,
  Projects,
  Publications,
  Skills
} from "../modules/UserInput";

const Create: NextPage = () => {
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
          <Education />
          <Experience />
          <Projects />
          <Certification />
          <Publications />
          <Skills />
        </Box>
        <Box aria-label="Resume Preview" flexBasis="50%">
          Resume
        </Box>
      </Box>
    </Layout>
  );
};

export default Create;
