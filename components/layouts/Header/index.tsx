import { Avatar } from "@chakra-ui/avatar";
import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React from "react";
import LogoSquare from "../LogoSquare";
import NavTabs from "../NavTabs";

const Header = () => {
  const router = useRouter();
  return (
    <Box
      my={{ base: "1rem" }}
      px={{ md: "4rem", lg: "7rem" }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <LogoSquare />
      <NavTabs currentRoute={router.pathname} />
      <Avatar size="sm" />
    </Box>
  );
};

export default Header;
