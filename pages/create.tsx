import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/layouts";
import NavTabs from "../components/layouts/NavTabs";
import { Contact, NameAndJobTitle } from "../modules/UserInput";

const Create: NextPage = () => {
  const router = useRouter();
  return (
    <Layout display="flex" flexDir="column" alignItems="center" w="100%">
      <NavTabs currentRoute={router.pathname} />
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
        </Box>
        <Box aria-label="Resume Preview" flexBasis="50%">
          Resume
        </Box>
      </Box>
    </Layout>
  );
};

export default Create;
