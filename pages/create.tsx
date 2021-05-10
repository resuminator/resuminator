import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import InputField from "../components/common/InputField";
import Layout from "../components/layouts";
import NavTabs from "../components/layouts/NavTabs";
import Section from "../components/layouts/Section";

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
          {[1, 2, 3, 4].map((item) => (
            <Section
              key={item}
              header={{
                title: "Let's go over some basic info",
                subtitle: "Provide your name, email, and where to contact you",
                size: { title: "lg", subtitle: "sm" },
              }}
            >
              <InputField labelProps={{ fontSize: "sm" }} label="Full Name" />
              <InputField labelProps={{ fontSize: "sm" }} label="Job Title" />
            </Section>
          ))}
        </Box>
        <Box aria-label="Resume Preview" flexBasis="50%">Resume</Box>
      </Box>
    </Layout>
  );
};

export default Create;
