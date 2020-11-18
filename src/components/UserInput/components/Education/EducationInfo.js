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
  desc: {
    minHeight: "2rem",
  },
  grade: {
    marginTop: "1rem",
    marginRight: "0.5rem"
  },
}));

function EducationInfo() {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <Typography color="primary" variant="body1" className={classes.heading}>
        Where did you get your recent degree from?
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
        className={classes.subtitle}
      >
        Add your college/school details along with any other information about
        it.
      </Typography>
      <TextField
        label="College/School"
        variant="outlined"
        color="secondary"
        className={classes.TextField}
        required
      />
      <TextField
        variant="outlined"
        size="small"
        label="Degree"
        color="secondary"
        placeholder="Degree and Majors"
        className={classes.TextField}
      />
      <Box display="flex" alignItems="center">
        <TextField
          variant="outlined"
          size="small"
          label="Grade"
          color="secondary"
          placeholder="Your CGPA"
          className={classes.grade}
        />
        <TextField
          variant="outlined"
          size="small"
          label="Max Grade"
          color="secondary"
          className={classes.grade}
        />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <TextField
          type="month"
          color="secondary"
          className={classes.TextField}
          label="Started"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          type="month"
          color="secondary"
          className={classes.TextField}
          label="Graduated"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      <TextField
        InputProps={{ classes: { input: classes.desc }, rowsMax: 2 }}
        variant="outlined"
        color="secondary"
        label="Activities & Societies"
        placeholder="Add relevant club names or positions of responsibility separated by commas..."
        multiline
        className={classes.TextField}
      />
    </Box>
  );
}

export default EducationInfo;
