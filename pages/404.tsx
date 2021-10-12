/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Box, Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import ImageCredit from "../components/common/ImageCredit";
import TextLink from "../components/common/TextLink";
import Layout from "../components/layouts";
import ScreenCenter from "../components/layouts/ScreenCenter";
import { DISCORD_INVITE, GITHUB_ISSUE, SUPPORT_EMAIL } from "../data/RefLinks";
import SEO from "../modules/SEO";
import mp from "../services/mixpanel";

const Custom404: NextPage = () => {
  useEffect(() => {
    mp.track("404 Error Page View");
  }, []);

  return (
    <>
      <SEO title="404 Not Found" />
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
            <Text
              fontSize={{ base: "lg", lg: "2xl" }}
              fontWeight="medium"
              mb="8"
            >
              Error 404: We could not find the page you were looking for.
            </Text>
            <Text mb="4" fontSize={{ base: "sm", lg: "md" }}>
              This may happen if the page you&lsquo;re looking for either does
              not exist or has been moved to a different location.
            </Text>
            <Link href="/home">
              <Button colorScheme="purple" leftIcon={<FiArrowLeft />} mb="8">
                Return Home
              </Button>
            </Link>
            <Text mb="4" fontSize="sm">
              If you feel this was a mistake, feel free to reach out to us on{" "}
              <TextLink link={DISCORD_INVITE} text="Discord" />, or raise an
              issue on <TextLink link={GITHUB_ISSUE} text="GitHub" />, or else
              send us an <TextLink link={SUPPORT_EMAIL} text="email" />.
            </Text>
          </Box>
          <Center flexBasis={{ md: "50%" }}>
            <VStack>
              <Image
                src="/404.png"
                alt="404 Not Found"
                boxSize={{ base: "183", md: "228", lg: "304", xl: "456" }}
              />
              <ImageCredit
                author={{
                  name: "Ekaterina Rogova",
                  link: "https://icons8.com/illustrations/author/5d1f49459e78e00011dbe817"
                }}
                source={{
                  name: "Ouch",
                  link: "https://icons8.com/illustrations"
                }}
              />
            </VStack>
          </Center>
        </ScreenCenter>
      </Layout>
    </>
  );
};

export default Custom404;
