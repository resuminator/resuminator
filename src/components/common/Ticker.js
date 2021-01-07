import { Box, IconButton, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { tickerMessage } from "../../App/Messages";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
  },
  message: {
    color: theme.palette.contrast.light,
    "@media (min-width:1280px)": {
      margin: "0 4rem 0 4rem",
    },
    margin: "0 2rem 0 2rem"
  },
  btn: {
    color: theme.palette.secondary.light,
  },
}));

const Ticker = () => {
  const classes = useStyles();
  const [show, setShow] = useState(true);

  return (
    <React.Fragment>
      {show ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          p={1}
          className={classes.root}
        >
          <Typography variant="body1" className={classes.message}>
            {tickerMessage}
          </Typography>
          <IconButton
            onClick={() => setShow(false)}
            className={classes.btn}
            size="small"
          >
            <IoMdClose />
          </IconButton>
        </Box>
      ) : null}
    </React.Fragment>
  );
};

export default Ticker;
