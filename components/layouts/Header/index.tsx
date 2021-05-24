import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React from "react";
import { LogoSquare } from "../Logos";
import NavTabs from "../NavTabs";
import UserAvatar from "./UserAvatar";

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
      <UserAvatar src="https://www.gravatar.com/avatar/516fd0624a35f74e54802fea778abf41" />
    </Box>
  );
};

export default Header;
