import {
  Box,
  Button,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { FiGithub, FiStar } from "react-icons/fi";
import { GITHUB_REPO } from "../../data/RefLinks";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";

const OpenSource = () => {
  return (
    <SectionLayout
      py="16"
      bgColor={useColorModeValue("blackAlpha.900", "blackAlpha.500")}
      minH="100vh"
    >
      <HeadingBox
        title="Proudly Community Driven"
        subtitle="Backed by open-source."
        titleProps={{ color: useColorModeValue("teal.200", "teal.400") }}
        subtitleProps={{ color: "teal.500" }}
      />

      <Box px={["0", "4", "16", "24", "72"]}>
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          lineHeight="tall"
          color="teal.200"
          pb="4"
        >
          We are big time open-source fans because of its collaborative nature
          and growth-for-all persona. We built Resuminator for a community of
          folks just like us because we wanted to give something back to place
          we have learnt so much from. ♥
        </Text>
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          lineHeight="tall"
          color="teal.200"
          pb="8"
        >
          You can be a part of this journey by helping us improve Resuminator
          for thousands of people around the world.
        </Text>
      </Box>
      <Stack
        px={["0", "4", "16", "24", "72"]}
        justifyContent="center"
        isInline={useBreakpointValue({ sm: true })}
      >
        <Button
          leftIcon={<FiGithub />}
          colorScheme="teal"
          size={useBreakpointValue({ md: "lg" })}
        >
          Contribute
        </Button>
        <Button
          as="a"
          href={GITHUB_REPO}
          leftIcon={<FiStar />}
          colorScheme="teal"
          size={useBreakpointValue({ md: "lg" })}
        >
          Star us on GitHub
        </Button>
      </Stack>
    </SectionLayout>
  );
};

export default OpenSource;
