import {
  Box,
  Fab,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
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
  margin: {
    margin: theme.spacing(1),
  },
}));

function CertificationInfo() {
  const classes = useStyles();

  return (
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <Typography color="primary" variant="body1" className={classes.heading}>
        Got any certifications?
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
        className={classes.subtitle}
      >
        Add your professional certifications with certification ID and/or Link
      </Typography>
      <Box display="flex" alignItems="center" justifyItems="space-evenly">
        <Paper elevation={2} className={classes.paper}>
          <TextField
            label="Name"
            variant="outlined"
            color="secondary"
            className={classes.TextField}
            required
          />
          <TextField
            variant="outlined"
            size="small"
            label="Issuing Authority"
            color="secondary"
            placeholder="company name"
            className={classes.TextField}
          />
          <TextField
            variant="outlined"
            size="small"
            label="Unique Certification ID"
            color="secondary"
            className={classes.TextField}
          />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <TextField
              type="month"
              color="secondary"
              className={classes.TextField}
              label="Obtained"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              type="month"
              color="secondary"
              className={classes.TextField}
              label="Expires"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <TextField
            variant="outlined"
            size="small"
            label="Link"
            color="secondary"
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

export default CertificationInfo;
