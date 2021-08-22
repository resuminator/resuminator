import {
  Box,
  Button,
  ButtonGroup,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { FiAlertCircle, FiGithub } from "react-icons/fi";

const OpenSource = () => {
  return (
    <Box
      px="8"
      py="16"
      bgColor={useColorModeValue("blackAlpha.900", "blackAlpha.500")}
      minH="50vh"
    >
      <Box mb="4">
        <Text
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          letterSpacing={-2}
          mb="1"
          lineHeight="short"
          color={useColorModeValue("teal.200", "teal.400")}
        >
          Proudly Community Driven
        </Text>
        <Text
          fontWeight="medium"
          fontSize="2xl"
          letterSpacing="tight"
          color="teal.500"
        >
          Backed by open-source.
        </Text>
      </Box>
      <Text fontSize="lg" lineHeight="tall" color="teal.200" pb="4">
        We are big time open-source fans because of its collaborative nature and
        growth-for-all persona. We built Resuminator for a community of folks
        just like us and wanted to give something back to place we have learnt
        so much from. ♥
      </Text>
      <Text fontSize="lg" lineHeight="tall" color="teal.200" pb="8">
        You can be a part of this journey by helping us improve Resuminator for
        thousands of people around the world.
      </Text>
      <ButtonGroup>
        <Button leftIcon={<FiGithub />} colorScheme="teal">
          Contribute on GitHub
        </Button>
        <Button leftIcon={<FiAlertCircle />} colorScheme="teal">
          Open an issue
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default OpenSource;
