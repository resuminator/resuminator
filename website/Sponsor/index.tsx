import { Box, Button, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import LinkText from "../../components/common/LinkText";
import { BUY_ME_A_COFFEE } from "../../data/RefLinks";
import mp from "../../services/mixpanel";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";

const Sponsor = () => {
  const trackMetric = (from: string, to: string) => {
    mp.track("Sponsor CTA Trigger", { from, to });
  };

  return (
    <SectionLayout id="sponsor" minH="100vh" aria-label="Sponsor Project">
      <HeadingBox
        title="Sponsor this project 💛"
        subtitle="Your support will help this project grow and impact the lives of thousands of job seekers"
        subtitleProps={{
          fontSize: { base: "lg", sm: "xl", md: "2xl", lg: "3xl" },
        }}
      />

      <Box px={["0", "4", "16", "24", "56"]} pb="16">
        <Text fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
          Resuminator is a free and open source project built and maintained by
          a{" "}
          <LinkText href="/about#team" textDecoration="underline">
            duo
          </LinkText>{" "}
          from India, and is backed by our community and contributors. You can
          support the development of this project if you believe this project
          added value to your life or could potentially add value to the lives
          of others.
        </Text>
      </Box>
      <Stack
        justifyContent="center"
        isInline={useBreakpointValue({ md: true })}
      >
        {/* <Button
              leftIcon={<FaHeart />}
              colorScheme="purple"
              size={useBreakpointValue({ md: "lg" })}
            >
              Become a supporter
            </Button> */}
        <Button
          as="a"
          href={BUY_ME_A_COFFEE}
          target="_blank"
          leftIcon={<FaPizzaSlice />}
          colorScheme="yellow"
          size={useBreakpointValue({ md: "lg" })}
          color="#1A202C"
          onClick={() => trackMetric("Buy Me a Coffee", BUY_ME_A_COFFEE)}
        >
          Buy us a pizza
        </Button>
      </Stack>
    </SectionLayout>
  );
};

export default Sponsor;
