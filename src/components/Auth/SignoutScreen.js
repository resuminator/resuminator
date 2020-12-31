import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Karla",
    fontWeight: 700,
    letterSpacing: "-0.2rem",
    fontSize: "3rem",
    color: theme.palette.primary.dark,
  },
  notice: {
    fontFamily: "Karla",
    width: "20rem",
    marginTop: "2rem",
    textAlign: "justify",
    fontSize: "0.9rem",
    color: theme.palette.grey[800],
  },
  TextField: {
    marginTop: "1rem",
    width: "20rem",
  },
  greeting: {
    fontSize: "1.2rem",
    fontFamily: "Karla",
    letterSpacing: "-0.08rem",
    color: theme.palette.grey[900],
    padding: "1rem",
    paddingBottom: "2rem",
  },
  btn: {
    marginTop: "2rem",
    marginRight: "1rem",
    textTransform: "none",
    fontFamily: "Karla",
  },
  error: {
    marginTop: "1rem",
    color: theme.palette.secondary.dark,
  },
}));

const SignoutScreen = () => {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
      width="100%"
      textAlign="center"
    >
      <Box p={2} mt={12}>
        <Typography variant="h1" className={classes.title}>
          Resuminator
        </Typography>
        <Typography variant="h2" className={classes.greeting}>
          Thank you for using Resuminator! 🙌🏻
        </Typography>
        <Typography
          variant="body1"
          className={classes.notice}
          color="textSecondary"
        >
          I hope you liked working with this application. If there is something
          in your mind which would improve the product, you may mail me at{" "}
          <a href="mailto:viveknigam.nigam3@gmail.com">
            viveknigam.nigam3@gmail.com
          </a>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={classes.btn}
          href={"/"}
          startIcon={<FiArrowLeft />}
        >
          Back to Login
        </Button>
      </Box>
    </Box>
  );
};

export default SignoutScreen;
