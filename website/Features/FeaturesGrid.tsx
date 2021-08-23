import {
  AspectRatio,
  Box,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import SectionLayout from "../common/SectionLayout";
import { FeatureDetails } from "./features.data";

const FeatureBox = ({ title, description, graphic, color }) => (
  <Box
    py="4"
    mb={{ base: "4", md: "8" }}
    display={{ md: "flex" }}
    alignItems="flex-start"
  >
    <Box flexBasis={{ md: "40%" }} pb={{ base: "8" }} pr={{ md: "4", lg: "8" }}>
      <Text
        as="h2"
        fontWeight="bold"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
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
    <SectionLayout>
      <Box
        py="4"
        mb={{ base: 0, md: "8" }}
        d={{ md: "flex" }}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        textAlign={{ sm: "center" }}
      >
        <Text
          as="h1"
          fontSize={{ base: "4xl", lg: "5xl" }}
          fontWeight="bold"
          letterSpacing={-2}
        >
          How we do this?
        </Text>
        <Text
          as="p"
          fontWeight="medium"
          fontSize={{ md: "xl", lg: "2xl" }}
          letterSpacing={{ base: "tight", md: "tighter" }}
          maxW={{ md: "80%", lg: "60%" }}
        >
          What makes Resuminator land this sweet spot between customization and
          ease
        </Text>
      </Box>
      <SimpleGrid templateColumns={{ base: "1fr", md: "1fr" }}>
        {FeatureDetails.map((feat) => (
          <FeatureBox key={feat.title} {...feat} />
        ))}
      </SimpleGrid>
    </SectionLayout>
  );
};

export default FeaturesGrid;
