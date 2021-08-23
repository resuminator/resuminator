import {
  Box,
  Button,
  Icon,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { FaHeart, FaPizzaSlice } from "react-icons/fa";
import { BUY_ME_A_COFFEE } from "../../data/RefLinks";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";

const Sponsor = () => {
  return (
    <SectionLayout py="16" minH="100vh">
      <HeadingBox
        title="Sponsor this project 💛"
        subtitle="Your support will help this project grow and impact the lives of thousands of job seekers"
        subtitleProps={{
          fontSize: { base: "lg", sm: "xl", md: "2xl", lg: "3xl" },
        }}
      />

      <Box px={["0", "4", "16", "24", "72"]}  pb="8">
        <Text mb="8" fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
          Resuminator is a free and open source project built and maintained by
          a duo from India, and is backed by our community and contributors. You
          can support the development of this project if you believe this
          project added value to your life or could potentially add value to the
          lives of others.
        </Text>
        <Stack
          justifyContent="center"
          isInline={useBreakpointValue({ md: true })}
        >
          {/* <Button leftIcon={<FaHeart />} colorScheme="purple">
          Become a supporter
        </Button> */}
          <Button
            as="a"
            href={BUY_ME_A_COFFEE}
            target="_blank"
            leftIcon={<FaPizzaSlice />}
            colorScheme="yellow"
            size={useBreakpointValue({ md: "lg" })}
          >
            Buy us a pizza
          </Button>
        </Stack>
      </Box>
    </SectionLayout>
  );
};

export default Sponsor;
