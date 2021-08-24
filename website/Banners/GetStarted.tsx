import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";
import PrimaryCTA from "../Hero/PrimaryCTA";

const GetStarted = () => {
  const darkGradient =
    "linear-gradient(90deg, rgba(144,205,244,1) 0%, rgba(101,222,247,1) 15%, rgba(81,237,229,1) 35%, rgba(119,247,193,1) 55%, rgba(180,251,149,1) 75%, rgba(249,248,113,1) 95%)";
  return (
    <SectionLayout
      d="flex"
      flexDir="column"
      alignItems="center"
      pb="16"
      bg={useColorModeValue("blackAlpha.900", "gray.900")}
    >
      <HeadingBox
        title="Smoother than your cheesecake"
        subtitle="Build a stunning single-page resume for your next job"
        subtitleProps={{
          maxW: "100%",
          color: "blue.100",
        }}
        titleProps={{
          bgGradient: darkGradient,
          bgClip: "text",
        }}
        mb="0"
        py={{ base: "8" }}
      />
      <PrimaryCTA width="fit-content" />
    </SectionLayout>
  );
};

export default GetStarted;
