import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

const useStyles = makeStyles({
  experience: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    width: "60%",
    padding: 10,
    margin: 10,
  },
});

function ExperienceInfo(props) {
  const classes = useStyles();

  const handleChange = () => {
    props.setPresent(!props.present);
  };

  return (
    <div id="experience" className={classes.experience}>
      <div id="text" style={{ fontSize: 18, padding: 10 }}>
        Describe some work experience
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          style={{ margin: 10}}
          label="Company"
          variant="outlined"
        />
        <TextField style={{ margin: 10 }} label="Location" variant="outlined" />
      </div>
      <TextField
        style={{ margin: 10 }}
        label="Role"
        variant="outlined"
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TextField
          label="Started"
          type="date"
          style={{ margin: 10}}
          InputLabelProps={{ shrink: true }}
          variant="outlined"
        />
        <TextField
          label="End"
          type="date"
          style={{ margin: 10 }}
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          disabled={props.present}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={props.present}
              onChange={handleChange}
              name="present"
              color="primary"
            />
          }
          label="Present"
        />
      </div>
      <TextField
        fullWidth
        multiline
        style={{ margin: 10 }}
        label="Responsibilites & Achievement"
        variant="outlined"
      />
      <TextField
        style={{ margin: 10 }}
        label="Tags"
        variant="outlined"
      />
      <div style={{ color: "#44318D",  padding: 10 }}>Add More</div>
    </div>
  );
}

ExperienceInfo.propTypes = {
  present: PropTypes.bool,
  setPresent: PropTypes.func,
};

export default ExperienceInfo;
