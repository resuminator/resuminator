/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ActionButton from "../common/ActionButton";
import UserMenu from "../User/UserMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Karla",
    color: theme.palette.text.primary,
    "@media (min-width:1280px)": {
      margin: "4.2rem",
      marginTop: "1rem",
      marginBottom: 0,
    },
  },
  logo: {
    fontWeight: 700,
    paddingRight: "0.5rem",
    letterSpacing: "-0.25rem",
    fontFamily: "Karla",
    border: "solid",
    borderColor: theme.palette.contrast.main,
    borderWidth: "0.1rem",
  },
  btn: {
    textTransform: "none",
    fontFamily: "Karla",
    letterSpacing: "-0.05rem",
    fontSize: "1rem",
    margin: "1rem",
  },
  menuIcons: {
    padding: "0.5rem",
  },
}));

function Header() {
  const classes = useStyles();
  const { width } = useWindowDimensions();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const suggestionButton = () => {
    if (width >= 1280)
      return (
        <ActionButton
          buttonText="💡 Have any suggestions/ideas?"
          link="https://github.com/viveknigam3003/resuminator/discussions/5"
          endIcon={<FiArrowRight />}
          className={classes.btn}
        />
      );
    return null;
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      className={classes.root}
      p={1}
      m={1}
      mt={2}
      mb={0}
    >
      <Typography
        id="logo"
        variant="h4"
        className={classes.logo}
        color="primary"
      >
        Re
      </Typography>
      <Box
        alignItems="center"
        justifyItems="center"
        display="flex"
        flexWrap="wrap"
      >
        {suggestionButton()}
        <UserMenu
          handleClose={handleClose}
          handleClick={handleClick}
          anchorEl={anchorEl}
        />
      </Box>
    </Box>
  );
}

export default Header;
