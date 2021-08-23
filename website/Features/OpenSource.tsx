import {
  Box,
  Button, Stack,
  Text,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { FiGithub, FiStar } from "react-icons/fi";
import { GITHUB_REPO } from "../../data/RefLinks";
import HeadingBox from "../common/HeadingBox";

const OpenSource = () => {
  return (
    <Box
      px="8"
      py="16"
      bgColor={useColorModeValue("blackAlpha.900", "blackAlpha.500")}
      minH="50vh"
    >
      <HeadingBox
        title="Proudly Community Driven"
        subtitle="Backed by open-source."
        titleProps={{ color: useColorModeValue("teal.200", "teal.400") }}
        subtitleProps={{ color: "teal.500" }}
      />

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
      <Stack isInline={useBreakpointValue({sm: true})}>
        <Button leftIcon={<FiGithub />} colorScheme="teal">
          Contribute
        </Button>
        <Button
          as="a"
          href={GITHUB_REPO}
          leftIcon={<FiStar />}
          colorScheme="teal"
        >
          Star on GitHub
        </Button>
      </Stack>
    </Box>
  );
};

export default OpenSource;
