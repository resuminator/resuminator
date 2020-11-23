import { Box, Fab, makeStyles, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { FiPlus } from "react-icons/fi";

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
    marginRight: "0.5rem",
  },
  paper: {
    display: "flex",
    minWidth: "25rem",
    flexDirection: "column",
    padding: "1rem",
    margin: "1rem",
    marginLeft: "0rem",
    borderRadius: "1rem",
    backgroundColor: theme.palette.contrast.light,
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
      <Box display="flex" alignItems="center" justifyItems="space-evenly">
        <Paper elevation={2} className={classes.paper}>
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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
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
        </Paper>
        <Fab
          size="small"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          <FiPlus />
        </Fab>
      </Box>
    </Box>
  );
}

export default EducationInfo;
