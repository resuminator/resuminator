/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import {
  Box,
  Button,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useState } from "react";
import {
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../Auth/AuthContext";
import { updateUserInfo } from "../Title/title.actions";
import { updateContactInfoState } from "./contact.action";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "1rem",
    width: "26rem",
    borderColor: theme.palette.contrast.light,
  },
  heading: {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  subtitle: {
    fontSize: "0.8rem",
  },
  btn: {
    marginTop: "1rem",
    fontFamily: "Karla",
    textTransform: "none",
    width: "8rem",
  },
}));

function ContactInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("email");
  const app = useSelector((state) => state.app);
  const userInfo = useSelector((state) => state.userInfo);
  const token = useContext(AuthContext).token;
  const storeState = useSelector((state) => state.userInfo.contact);
  const loading = useSelector((state) => state.userInfo.loading);
  const [state, setState] = useState(storeState);
  const [changed, setChanged] = useState(false);

  React.useEffect(() => {
    if (!app.init) setState(storeState);
  }, [app, storeState]);

  React.useEffect(() => {
    setState(storeState);
  }, [loading, storeState]);

  const handleChange = (e) => {
    setChanged(true);
    e.preventDefault();
    const value = e.target.value;

    setState({ ...state, [selected]: value });
  };

  React.useEffect(() => {
    dispatch(updateContactInfoState(state));
  }, [dispatch, state]);

  const handleSave = () => {
    setChanged(false);
    dispatch(
      updateUserInfo(token, {
        contact: state,
      })
    );
  };

  const findValue = (label) => {
    return state[label];
  };

  const highlight = (label) => {
    if (selected === label) return "primary";
    return "default";
  };

  const placeholder = (label) => {
    switch (label) {
      case "email":
        return "Enter Email";
      case "linkedin":
        return "Enter LinkedIn Profile Link";
      case "github":
        return "Enter GitHub Profile Link";
      case "twitter":
        return "Enter Twitter Profile Link";
      case "portfolio":
        return "Enter Portfolio Link";
      case "phone":
        return "Enter Valid Contact Number";
      default:
        return "Enter Social Handle Link";
    }
  };

  return (
    <Box display="flex" flexDirection="column" mt={2} p={2}>
      <Typography variant="body1" color="primary" className={classes.heading}>
        Connect your social accounts
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        className={classes.subtitle}
      >
        Help us verify your social media handles
      </Typography>
      <Box display="flex" justifyItems="space-between" pt={1}>
        <IconButton
          aria-label="email"
          color={highlight("email")}
          onClick={() => setSelected("email")}
        >
          <FiMail />
        </IconButton>
        <IconButton
          aria-label="linkedin"
          onClick={() => setSelected("linkedin")}
          color={highlight("linkedin")}
        >
          <FiLinkedin />
        </IconButton>
        <IconButton
          aria-label="twitter"
          color={highlight("twitter")}
          onClick={() => setSelected("twitter")}
        >
          <FiTwitter />
        </IconButton>
        <IconButton
          aria-label="github"
          color={highlight("github")}
          onClick={() => setSelected("github")}
        >
          <FiGithub />
        </IconButton>
        <IconButton
          aria-label="portfolio"
          color={highlight("portfolio")}
          onClick={() => setSelected("portfolio")}
        >
          <FiGlobe />
        </IconButton>
        <IconButton
          aria-label="phone"
          color={highlight("phone")}
          onClick={() => setSelected("phone")}
        >
          <FiPhone />
        </IconButton>
      </Box>
      <TextField
        variant="outlined"
        color="secondary"
        size="small"
        placeholder={placeholder(selected)}
        value={findValue(selected)}
        onChange={handleChange}
        className={classes.TextField}
      />
      {changed ? (
        <Button
          color="primary"
          variant="contained"
          className={classes.btn}
          onClick={handleSave}
        >
          Save Changes
        </Button>
      ) : null}
    </Box>
  );
}

export default ContactInput;
