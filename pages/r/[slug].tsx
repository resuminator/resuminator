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

import { Box, Divider } from "@chakra-ui/react";
import { GetServerSidePropsContext, NextPage } from "next";
import nookies from "nookies";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getResumeData } from "../../apis/resume";
import placeholderData from "../../data/placeholderData";
import PreviewContent from "../../modules/Preview/Content";
import PreviewFooter from "../../modules/Preview/Footer";
import PreviewHeader from "../../modules/Preview/Header";
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
        <PreviewHeader />
        <PreviewContent />
        <Divider my="8" />
        <PreviewFooter />
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
