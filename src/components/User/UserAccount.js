import { Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import AvatarOverview from "./AvatarOverview";
import Billing from "./Billing";
import PersonalDetails from "./PersonalDetails";

const UserAccount = () => {
  const userInfo = useSelector((state) => state.userInfo);
  return (
    <Box
      alignItems="flex-start"
      justifyContent="left"
      height="100%"
      display="flex"
      m={36}
      mt={4}
      mb={10}
    >
      <AvatarOverview user={userInfo} />
      <Box
        alignItems="flex-start"
        height="100%"
        display="flex"
        flexDirection="column"
        width="26rem"
      >
        <PersonalDetails user={userInfo} />
        <Billing user={userInfo} />
      </Box>
    </Box>
  );
};

export default UserAccount;
