import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  basic: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    height: "5em",
    width: "80%",
    padding: 10,
    margin: 10
  },
  input: {
    display: "flex",
    width: "100%",
  },
});

function BasicInfo(props) {
  const classes = useStyles();
  return (
    <div id="basic-info" className={classes.basic}>
      <div style={{ padding: 10, fontSize: 18 }}>
        Let's go over some basic intro
      </div>
      <div className={classes.input}>
        <TextField
          id="name"
          label="Full Name"
          variant="outlined"
          color="primary"
          style={{ margin: 10 }}
          fullWidth
        />
        <TextField
          id="title"
          label="Job Title"
          variant="outlined"
          color="primary"
          style={{ margin: 10 }}
          fullWidth
        />
      </div>
    </div>
  );
}

BasicInfo.propTypes = {
  setName: PropTypes.func,
  setJobTitle: PropTypes.func,
};

export default BasicInfo;
