import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles({
  contact: {
    display: "flex",
    width: "50%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 30,
    margin: 20,
    padding: 10,
    flexDirection: "column",
  },
});

function ContactInfo(props) {
  const classes = useStyles();

  const handleChange = (event) => {
    props.setSocial(event.target.value);
  };

  return (
    <div id="contact-info" className={classes.contact}>
      <div style={{ fontSize: 18 }}>Where can people reach you?</div>
      <div style={{ display: "flex", width: "100%" }}>
        <FormControl
          style={{ width: "30%", marginTop: 20 }}
          variant="outlined"
          className={classes.formControl}
        >
          <InputLabel id="social-platform">Social</InputLabel>
          <Select
            labelId="social-platform-label"
            id="social"
            value={props.social}
            onChange={handleChange}
            label="Social"
          >
            <MenuItem value={`None`}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={`LinkedIn`}>LinkedIn</MenuItem>
            <MenuItem value={`Github`}>Github</MenuItem>
            <MenuItem value={`Email`}>Email</MenuItem>
            <MenuItem value={`Twitter`}>Twitter</MenuItem>
          </Select>
        </FormControl>
        <TextField
          variant="outlined"
          label="Handle"
          style={{ width: "60%", margin: 20 }}
        />
      </div>
      <div style={{ color: "#44318D" }}>Add More</div>
    </div>
  );
}

ContactInfo.propTypes = {
  social: PropTypes.string,
  setSocial: PropTypes.func,
  setHandle: PropTypes.func,
};

export default ContactInfo;
