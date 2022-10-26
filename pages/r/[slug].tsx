/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2022 Resuminator Authors

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

import {
  Box,
  Divider,
  HStack,
  Icon,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { GetServerSidePropsContext, NextPage } from "next";
import Link from "next/link";
import nookies from "nookies";
import { FiArrowRight } from "react-icons/fi";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getResumeData } from "../../apis/resume";
import ColorModeToggle from "../../components/layouts/Header/ColorModeToggle";
import { LogoWithText } from "../../components/layouts/Logos";
import placeholderData from "../../data/placeholderData";
import ResumePreview from "../../modules/Resume/Preview";
import SEO from "../../modules/SEO";
import InitStore from "../../store/InitStore";

interface ResumeProps {
  token: string;
  id: string;
}

const Resume: NextPage<ResumeProps> = ({ token, id }) => {
  const { data, status } = useQuery(
    "getResumeData",
    () => getResumeData(token, id),
    {
      placeholderData
    }
  );
  const fontColor = useColorModeValue("gray.600", "gray.400");

  return (
    <>
      <InitStore data={data} status={status} />
      <SEO title={`${data.contact.fullName}'s Resume`} />
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        flexDir={"column"}
        bg="blackAlpha.50"
        pb="10"
      >
        <Box
          py="4"
          width={"100%"}
          px={{ md: "4rem", lg: "7rem" }}
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <LogoWithText
            width={"120px"}
            height={"24px"}
            filter="grayscale(1)"
            opacity={"0.5"}
          />
          <HStack>
            <Link href="/">
              <HStack
                spacing={"1"}
                cursor={"pointer"}
                _hover={{ textDecoration: "underline" }}
              >
                <Text fontSize={"sm"} color={fontColor}>
                  Learn More
                </Text>
                <Icon fontSize={"sm"} color={fontColor} as={FiArrowRight} />
              </HStack>
            </Link>
            <ColorModeToggle />
          </HStack>
        </Box>

        <Box
          display={"flex"}
          w="100%"
          justifyContent={"center"}
          alignItems="center"
        >
          <Box
            width={"21cm"}
            boxShadow={useColorModeValue("xl", "2xl")}
            bg={useColorModeValue("#fffafa", "gray.800")}
            borderRadius={"md"}
          >
            <ResumePreview />
          </Box>
        </Box>
        <Divider my="8" />
        <Box
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
          w="100%"
        >
          <HStack
            fontSize={"sm"}
            color={fontColor}
            justify="center"
            spacing={"4"}
          >
            <Text>Create a resume</Text>
            <Text>Report</Text>
            <Text>About</Text>
            <Text>GitHub</Text>
            <Text>Twitter</Text>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Resume;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  //If token is present, pass it to the query to fetch data from API
  const { slug } = ctx.params;
  const [username, id] = (slug as string).split("-");

  if (!username || !id) {
    return {
      notFound: true
    };
  }

  let token: string;

  const userAgent = ctx.req.headers["user-agent"];
  if (userAgent.split(" ").includes("R8")) {
    token = ctx.req.headers["token"].toString();
    console.log("Request from Puppeteer", token.substr(0, 25));
  } else {
    token = nookies.get(ctx).token;
    console.log("Request from NextJS");
  }

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login"
      }
    };
  }
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getResumeData", () =>
    getResumeData(token.toString(), id.toString())
  );
  return {
    props: {
      token,
      id,
      dehydratedState: dehydrate(queryClient)
    }
  };
};
