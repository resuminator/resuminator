import {
  AspectRatio,
  Box,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";
import { FeatureDetails } from "./features.data";

const FeatureBox = ({ title, description, graphic, color }) => (
  <Box
    py="4"
    mb={{ base: "4", md: "8", xl: "0" }}
    display={{ md: "flex" }}
    alignItems="center"
    minH={{ xl: "100vh" }}
  >
    <Box flexBasis={{ md: "40%" }} pb={{ base: "8" }} pr={{ md: "4", lg: "8" }}>
      <Text
        as="h2"
        fontWeight="bold"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl", xl: "5xl" }}
        letterSpacing="tighter"
        mb="4"
        color={useColorModeValue(color[0], color[1])}
      >
        {title}
      </Text>
      <Text
        fontSize={{ base: "sm", sm: "md", lg: "lg", xl: "xl" }}
        fontWeight={{ sm: "medium", md: "normal" }}
        color={useColorModeValue("gray.800", "gray.400")}
      >
        {description}
      </Text>
    </Box>
    <AspectRatio
      maxW="100%"
      maxH="100%"
      ratio={16 / 9}
      flexBasis={{ md: "60%" }}
    >
      <Image
        src={graphic}
        borderRadius="10px"
        shadow={useColorModeValue("md", "2xl")}
      />
    </AspectRatio>
  </Box>
);

const FeaturesGrid = () => {
  return (
    <SectionLayout aria-label="Features 2x2">
      <HeadingBox
        title="How we do this?"
        subtitle="What makes Resuminator land this sweet spot between customization and ease"
        subtitleProps={{ fontSize: { base: "xl", lg: "2xl" } }}
      />
      <SimpleGrid templateColumns={{ base: "1fr", md: "1fr" }}>
        {FeatureDetails.map((feat) => (
          <FeatureBox key={feat.title} {...feat} />
        ))}
      </SimpleGrid>
    </SectionLayout>
  );
};

export default FeaturesGrid;
