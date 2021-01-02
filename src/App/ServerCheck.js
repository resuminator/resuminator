import { Box, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import axios from "axios";
import React, { useState } from "react";
import { SERVER } from "../utils/Server";

const useStyles = makeStyles((theme) => ({
  root: {
    position: (props) => props.relative ? "relative": "absolute",
    bottom: "1rem",
  },
  logo: {
    fontWeight: 700,
    letterSpacing: "-0.01rem",
    padding: "0.2rem",
    fontFamily: "Karla",
    fontSize: "0.8rem",
    color: grey[600],
    backgroundColor: (props) =>
      props.dark ? theme.palette.primary.dark : "#fffafa",
    border: "solid",
    borderColor: (props) =>
      props.dark ? theme.palette.primary.light : theme.palette.contrast.main,
    borderWidth: "0.1rem",
    width: "9rem",
    borderRadius: "0.1rem",
  },
  link: {
    textDecoration: "none",
  },
}));

const ServerCheck = ({ dark, relative }) => {
  const classes = useStyles({ dark, relative });
  const [active, setActive] = useState(false);

  React.useEffect(() => {
    axios
      .get(`${SERVER}/`)
      .then((response) =>
        response.data.status === "Connected"
          ? setActive(true)
          : setActive(false)
      )
      .catch(() => setActive(false));
  }, []);

  const getStatusMessage = () => {
    return active ? (
      <Typography className={classes.logo}>🟢 All Systems Normal</Typography>
    ) : (
      <Typography className={classes.logo}>🟠 Servers Idle</Typography>
    );
  };

  return <Box className={classes.root}>{getStatusMessage()}</Box>;
};

export default ServerCheck;
