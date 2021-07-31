import { Box, Button, Center, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import TextLink from "../components/common/TextLink";
import Layout from "../components/layouts";
import ScreenCenter from "../components/layouts/ScreenCenter";
import { DISCORD_INVITE, GITHUB_ISSUE, SUPPORT_EMAIL } from "../data/RefLinks";

const Custom404: NextPage = () => {
  return (
    <Layout hasHeaderHidden>
      <ScreenCenter py="8" flexWrap={{ base: "wrap-reverse", lg: "nowrap" }}>
        <Box flexBasis="50%" alignItems="flex-start">
          <Text
            as="h1"
            fontSize={{ base: "4xl", lg: "6xl" }}
            fontWeight="bold"
            letterSpacing="tight"
            mb="2"
          >
            It&rsquo;s void out here!
          </Text>
          <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium" mb="8">
            Error 404: We could not find the page you were looking for.
          </Text>
          <Text mb="4" fontSize={{ base: "sm", lg: "md" }}>
            This may happen if the page you&lsquo;re looking for either does not
            exist or has been moved to a different location.
          </Text>
          <Link href="/home">
            <Button colorScheme="purple" leftIcon={<FiArrowLeft />} mb="8">
              Return Home
            </Button>
          </Link>
          <Text mb="4" fontSize="sm">
            If you feel this was a mistake, feel free to reach out to us on{" "}
            <TextLink link={DISCORD_INVITE} text="Discord" />, or raise an issue
            on <TextLink link={GITHUB_ISSUE} text="GitHub" />, or else send us
            an <TextLink link={SUPPORT_EMAIL} text="email" />.
          </Text>
        </Box>
        <Center flexBasis={{ md: "50%" }}>
          <Image
            src="/404.png"
            alt="404 Not Found"
            width="456"
            height="456"
            layout="intrinsic"
          />
        </Center>
      </ScreenCenter>
    </Layout>
  );
};

export default Custom404;
