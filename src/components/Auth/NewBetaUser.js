import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { AnimateSharedLayout, motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Loader from "../common/Loader";
import { processNewUser } from "./AuthAPIs";
import { AuthContext } from "./AuthContext";

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
  footer: {
    fontFamily: "Karla",
    width: "20rem",
    marginTop: "2rem",
    textAlign: "center",
    fontSize: "0.8rem",
    color: theme.palette.grey[800],
    position: "absolute",
    bottom: "2rem"
  }
}));

const NewBetaUser = (props) => {
  const classes = useStyles();
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const MIN_LENGTH = 8;
  const [passwordPayload, setPasswordPayload] = useState({
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setMessage("");
    setPasswordPayload({ ...passwordPayload, [e.target.name]: e.target.value });
  };

  const getCredentials = (query) => {
    return query.replace("?", "").split("&&P=");
  };

  const handleError = (err) => {
    setMessage(err.message);
    setLoading(false);
  };

  const setUID = async (uid) => {
    return auth.setUid(uid);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordPayload.password)
      return setMessage("Please enter new password!");
    if (!passwordPayload.confirmPassword)
      return setMessage("Please confirm new password!");
    if (passwordPayload.password.length < MIN_LENGTH)
      return setMessage("Password should atleast be 8 characters");
    if (passwordPayload.password !== passwordPayload.confirmPassword)
      return setMessage("Passwords don't match, please check again.");

    const [uid, password] = getCredentials(props.location.search);

    localStorage.setItem("newUser", true);
    setLoading(true);

    processNewUser(uid, password, passwordPayload.password)
      .then(() => {
        setUID(uid)
          .then(() => {
            setLoading(false);
            localStorage.setItem("loggedIn", true);
            localStorage.removeItem("newUser");
            setCompleted(true);
          })
          .catch((err) => handleError(err));
      })
      .catch((err) => handleError(err));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyItems="center"
      width="100%"
      textAlign="center"
      mt={12}
    >
      <Typography variant="h1" className={classes.title}>
        Resuminator
      </Typography>
      <Typography variant="h2" className={classes.greeting}>
        Hi there! Please set a new password to proceed.
      </Typography>
      <TextField
        label="Password"
        variant="outlined"
        size="small"
        name="password"
        type="password"
        value={passwordPayload.password}
        className={classes.TextField}
        placeholder="Atleast 8 characters"
        onChange={handleChange}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        size="small"
        name="confirmPassword"
        type="password"
        value={passwordPayload.confirmPassword}
        className={classes.TextField}
        placeholder="Re-enter your password to confirm"
        onChange={handleChange}
      />
      <Typography
        variant="body1"
        className={classes.notice}
        color="textSecondary"
      >
        Once the password has been set successfully, you will be redirected to
        Resuminator where you can start builing an awesome resume.
      </Typography>
      <AnimateSharedLayout>
        {completed ? (
          <motion.div layout>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.btn}
              href="/"
            >
              Get Started! 🚀
            </Button>
          </motion.div>
        ) : (
          <motion.div layout>
            <Button
              variant="contained"
              color="inherit"
              disableElevation
              className={classes.btn}
              href="/"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.btn}
              onClick={handleSubmit}
              endIcon={<FiArrowRight />}
            >
              Continue
            </Button>
          </motion.div>
        )}
      </AnimateSharedLayout>
      {loading ? (
        <Loader />
      ) : (
        <Typography className={classes.error} variant="body2">
          {message}
        </Typography>
      )}
      <Typography
        variant="body1"
        className={classes.footer}
        color="textSecondary"
      >
        If you face any issues during the process, do let me know at{" "}
        <a href="mailto:viveknigam.nigam3@gmail.com">
          viveknigam.nigam3@gmail.com
        </a>
        
      </Typography>
    </Box>
  );
};

export default NewBetaUser;
