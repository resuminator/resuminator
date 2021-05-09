import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import BoxHeader from "../components/common/BoxHeader";
import InputField from "../components/common/InputField";
import Layout from "../components/layouts";
import NavTabs from "../components/NavTabs";

const Create: NextPage = () => {
  const router = useRouter();
  return (
    <Layout display="flex" flexDir="column" alignItems="center" w="100%">
      <NavTabs currentRoute={router.pathname} />
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        height="100vh"
        width="100%"
        px="0"
        py="5"
      >
        <Box flexBasis="50%">
          <Box mb="8">
            <BoxHeader
              title="Let's go over some basic info"
              subtitle="Provide your name, email, and where to contact you"
              size={{ title: "lg", subtitle: "sm" }}
            />
            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
              w="80%"
            >
              <InputField labelProps={{ fontSize: "sm" }} label="Full Name" />
              <InputField labelProps={{ fontSize: "sm" }} label="Job Title" />
            </Box>
          </Box>
        </Box>
        <Box flexBasis="50%">Resume</Box>
      </Box>
    </Layout>
  );
};

export default Create;
