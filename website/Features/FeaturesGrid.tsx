import {
  AspectRatio,
  Box,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import FeatureDetails from "./features.data";

const FeatureBox = ({ title, description, graphic }) => (
  <Box py="4">
    <Text
      as="h2"
      fontWeight="bold"
      fontSize="2xl"
      letterSpacing="tighter"
      mb="4"
      color={useColorModeValue("purple.600", "purple.400")}
    >
      {title}
    </Text>
    <Text
      fontSize="sm"
      fontWeight="medium"
      color={useColorModeValue("gray.800", "gray.400")}
    >
      {description}
    </Text>
    <AspectRatio maxW="100%" ratio={16 / 9} my="8">
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
    <Box px="8" py="4">
      <Box py="4">
        <Text as="h1" fontSize="4xl" fontWeight="bold" letterSpacing={-2}>
          How we do this?
        </Text>
        <Text as="p" fontWeight="medium">
          What makes Resuminator land this sweet spot between customization and
          ease
        </Text>
      </Box>
      <SimpleGrid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        {FeatureDetails.map((feat) => (
          <FeatureBox key={feat.title} {...feat} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default FeaturesGrid;
