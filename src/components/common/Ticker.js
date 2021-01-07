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
  },
  btn: {
    float: "right",
    right: "4rem",
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
          justifyContent="center"
          alignItems="center"
          textAlign="center"
          p={1}
          className={classes.root}
        >
          <Typography variant="body1" className={classes.message}>
            {tickerMessage}
            <IconButton
              onClick={() => setShow(false)}
              className={classes.btn}
              size="small"
            >
              <IoMdClose />
            </IconButton>
          </Typography>
        </Box>
      ) : null}
    </React.Fragment>
  );
};

export default Ticker;
