import {
  Avatar,
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { FiCheck } from "react-icons/fi";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  h2: {
    fontFamily: "Karla",
    letterSpacing: "-0.05rem",
    fontWeight: 700,
    fontSize: "2.5rem",
  },
  h3: {
    paddingTop: "2rem",
    fontFamily: "Karla",
    fontSize: "1.5rem",
    letterSpacing: "-0.05rem",
  },
  TextField: {
    marginTop: "0.2rem",
    fontFamily: "Roboto",
  },
  textLabel: {
    fontSize: "0.9rem",
    marginTop: "1rem",
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
  btn: {
    marginTop: "1rem",
    fontSize: "0.9rem",
    fontFamily: "Karla",
    textTransform: "None",
  },
}));

const UserAccount = () => {
  const classes = useStyles();
  const userInfo = useSelector(state => state.userInfo);
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
      <Box display="flex" flexDirection="column" alignItems="center" m={8}>
        <Avatar className={classes.avatar} src={userInfo.avatar}/>
      </Box>
      <Box
        alignItems="flex-start"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Typography variant="h2" className={classes.h2}>
          Your Account
        </Typography>
        <Typography variant="h3" className={classes.h3}>
          Personal Details
        </Typography>
        <Box display="flex" flexDirection="column" width="18rem">
          <Typography className={classes.textLabel}>Full Name</Typography>
          <TextField
            name="name"
            placeholder="Enter full name"
            variant="outlined"
            size="small"
            value={userInfo.name}
            className={classes.TextField}
          />
          <Typography className={classes.textLabel}>Job Title</Typography>
          <TextField
            name="jobTitle"
            placeholder="Enter Job Title"
            variant="outlined"
            size="small"
            value={userInfo.jobTitle}
            className={classes.TextField}
          />
          <Typography className={classes.textLabel}>Email Address</Typography>
          <TextField
            name="email"
            placeholder="Enter primary email"
            variant="outlined"
            size="small"
            value={userInfo.email}
            className={classes.TextField}
          />
          <Button
            disableElevation
            endIcon={<FiCheck />}
            color="primary"
            variant="contained"
            className={classes.btn}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserAccount;
