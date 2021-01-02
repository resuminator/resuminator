/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import AvatarOverview from "./AvatarOverview";
import Billing from "./Billing";
import PersonalDetails from "./PersonalDetails";

const useStyles = makeStyles(theme => ({
  root: {
    "@media (max-width:1280px)": {
      margin: "2.5rem",
      marginTop: "1rem",
      marginBottom: "10rem",
    },
  }
}))

const UserAccount = () => {
  const classes = useStyles();
  const userInfo = useSelector((state) => state.userInfo);
  const {width} = useWindowDimensions();

  return (
    <Box
      alignItems="flex-start"
      justifyContent="left"
      height="100%"
      display="flex"
      m={36}
      mt={4}
      mb={10}
      className={classes.root}
    >
      {width >= 1024 ? <AvatarOverview user={userInfo} /> : null}
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
