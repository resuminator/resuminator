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

import { Box } from "@chakra-ui/layout";
import { GetServerSidePropsContext, NextPage } from "next";
import nookies from "nookies";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { QueryClient, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import { getUserData } from "../../apis/meta";
import { getResumeData } from "../../apis/resume";
import Layout from "../../components/layouts";
import placeholderData, { userPlaceholder } from "../../data/placeholderData";
import SEO from "../../modules/SEO";
import { UserObject } from "../../modules/User/types";
import {
  Certification,
  Contact,
  Education,
  Experience,
  NameAndJobTitle,
  Projects,
  Publications,
  Skills,
} from "../../modules/UserInput";
import UserImage from "../../modules/UserInput/Contact/UserImage";
import CustomSections from "../../modules/UserInput/Custom";
import CustomSectionInputs from "../../modules/UserInput/Custom/CustomSectionInputs";
import Viewer from "../../modules/Viewer";
import mp from "../../services/mixpanel";
import InitStore from "../../store/InitStore";
import InitUserStore from "../../store/InitUserStore";
import useResumeStore from "../../store/resume.store";
import { InputSectionKeys, Result } from "../../store/types";

const getInputSection = (key: InputSectionKeys) => {
  switch (key) {
    case "EDUCATION":
      return <Education />;
    case "EXPERIENCE":
      return <Experience />;
    case "PROJECTS":
      return <Projects />;
    case "CERTIFICATIONS":
      return <Certification />;
    case "PUBLICATIONS":
      return <Publications />;
    case "SKILLS":
      return <Skills />;
  }
};

interface CreateProps {
  token: string;
  id: string;
}

const Create: NextPage<CreateProps> = ({ token, id }) => {
  const inputs = useResumeStore((state) => state.properties.inputs);
  const { data, status } = useQuery<Result>(
    "getResumeData",
    () => getResumeData(token, id),
    {
      placeholderData,
    }
  );
  const { data: userData, status: userQueryStatus } = useQuery<
    UserObject,
    Error
  >("getUserData", () => getUserData(token), {
    placeholderData: userPlaceholder,
  });

  useEffect(() => {
    mp.track("Create Page View", { id });
  }, [id]);

  return (
    <>
      <SEO title="Edit Resume" />
      <InitStore data={data} status={status} id={id} />
      <InitUserStore data={userData} status={userQueryStatus} />

      <Layout py="5">
        <Box
          aria-label="Resume Inputs"
          flexBasis="50%"
          className="resume-inputs"
        >
          <NameAndJobTitle />
          <UserImage />
          <Contact />
          {inputs.map((key) => (
            <Fragment key={key}>{getInputSection(key)}</Fragment>
          ))}
          <CustomSections />
          <CustomSectionInputs />
        </Box>
        <Viewer aria-label="Resume Preview" flexBasis="50%" withStatus />
      </Layout>
    </>
  );
};

export default Create;

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  //Try to get token from cookies.
  const cookies = nookies.get(ctx);
  const token = cookies.token;

  //If the token does not exist or is cleared then redirect to login page.
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }

  //If token is present, pass it to the query to fetch data from API
  const { id } = ctx.params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("getResumeData", () =>
    getResumeData(token, id.toString())
  );
  return {
    props: {
      token,
      id,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
