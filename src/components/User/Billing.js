import { Box, makeStyles, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles({
  h3: {
    paddingTop: "2rem",
    fontFamily: "Karla",
    fontSize: "1.5rem",
    letterSpacing: "-0.05rem",
  },
  subtitle: {
    fontFamily: "Roboto",
    marginTop: "0.8rem",
    fontSize: "0.9rem",
    color: grey[600],
  },
  textLabel: {
    color: grey[900],
    fontSize: "1rem",
    marginTop: "1rem",
  },
});

const Billing = () => {
  const classes = useStyles();

  return (
    <Box
      alignItems="flex-start"
      height="100%"
      display="flex"
      flexDirection="column"
      width="100%"
    >
      <Typography variant="h3" className={classes.h3}>
        Billing
      </Typography>
      <Typography variant="subtitle" className={classes.subtitle}>
        You can see your current plan and billing info below.
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography variant="body1" className={classes.textLabel}>
          Resuminator Early Access Member
        </Typography>
        <Typography variant="subtitle1" className={classes.textLabel}>
          FREE - ₹ 0.00
        </Typography>
      </Box>
    </Box>
  );
};

export default Billing;
