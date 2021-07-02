import { Box } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import React from "react";
import useUserStore from "../../../modules/User/store";
import useResumeStore from "../../../store/resume.store";
import { LogoSquare } from "../Logos";
import NavTabs from "../NavTabs";
import UserAvatar from "./UserAvatar";

const Header = () => {
  const router = useRouter();
  const savedState = useResumeStore((state) => state._id);
  const userAvatar = useUserStore(state => state.avatar);
  const id = router.query.id ? router.query.id : savedState;

  return (
    <Box
      my={{ base: "1rem" }}
      px={{ md: "4rem", lg: "7rem" }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <LogoSquare />
      <NavTabs id={id} currentRoute={router.pathname} />
      <UserAvatar src={userAvatar} />
    </Box>
  );
};

export default Header;
