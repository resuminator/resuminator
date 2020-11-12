import { Box, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "1rem",
  },
  heading: {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
  subtitle: {
    fontSize: "0.8rem",
  },
}));

function BasicInfo() {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" p={2}>
      <Typography color="primary" variant="body1" className={classes.heading}>
        Let's go over some basic info
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
        className={classes.subtitle}
      >
        We pulled in some information from your profile, you can edit it below.
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <TextField
          label="Full Name"
          type="Name"
          variant="outlined"
          color="secondary"
          className={classes.TextField}
        />
        <TextField
          label="Job Title"
          variant="outlined"
          color="secondary"
          className={classes.TextField}
        />
      </Box>
    </Box>
  );
}

export default BasicInfo;
