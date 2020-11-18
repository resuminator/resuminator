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
       <Box display="flex" alignItems="center" justifyContent="space-between">
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
    </Box>
  );
}

export default CertificationInfo;
