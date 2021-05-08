import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/layouts";
import NavTabs from "../components/NavTabs";

const Create: NextPage = () => {
  const router = useRouter();
  return (
    <Layout display="flex"  flexDir="column" alignItems="center" w="100%">
      <NavTabs currentRoute={router.pathname} />
      
    </Layout>
  );
};


export default Create;
