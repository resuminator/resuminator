import { Box, Button, Center, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import ImageCredit from "../components/common/ImageCredit";
import TextLink from "../components/common/TextLink";
import Layout from "../components/layouts";
import ScreenCenter from "../components/layouts/ScreenCenter";
import { DISCORD_INVITE, RESUMINATOR_TWITTER } from "../data/RefLinks";

const Maintenance: NextPage = () => {
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
            Beep Boop!
          </Text>
          <Text fontSize={{ base: "lg", lg: "2xl" }} fontWeight="medium" mb="8">
            503: Resuminator is down for maintenance
          </Text>
          <Text mb="4" fontSize={{ base: "sm", lg: "md" }}>
            This is temporary though, we&lsquo;ll be back soon. Meanwhile follow
            us on <TextLink text="Twitter" link={RESUMINATOR_TWITTER} />, and
            join us on <TextLink link={DISCORD_INVITE} text="Discord" /> for
            promt updates and support.
          </Text>
          <Link href="/home">
            <Button colorScheme="purple" leftIcon={<FiArrowLeft />} mb="8">
              Return Home
            </Button>
          </Link>
        </Box>
        <Center flexBasis={{ md: "50%" }}>
          <VStack>
            <Image
              src="/maintenance.png"
              alt="H8 Under Maintenence"
              width="450"
              height="450"
              layout="intrinsic"
            />
            <ImageCredit
              author={{
                name: "Bogdan Magenta",
                link: "https://icons8.com/illustrations/author/5dd5075701d03600114d621f",
              }}
              source={{
                name: "Ouch",
                link: "https://icons8.com/illustrations",
              }}
            />
          </VStack>
        </Center>
      </ScreenCenter>
    </Layout>
  );
};

export default Maintenance;
