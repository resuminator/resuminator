import {
  Box,
  Chip,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
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
    minHeight: "5rem",
  },
  tags: {
    marginRight: "0.2rem",
  },
  hints: {
    paddingTop: "0.5rem",
  },
}));

function ExperienceInfo() {
  const classes = useStyles();
  const tags = ["React", "UI/UX", "Testing"]; //Will be generated from Description Text's Topic Classification

  return (
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <Typography color="primary" variant="body1" className={classes.heading}>
        Tell us about your work experience
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
        className={classes.subtitle}
      >
        Don't worry, add anything which you feel relevant for your job
        application
      </Typography>
      <TextField
        label="Company/Institution"
        variant="outlined"
        color="secondary"
        className={classes.TextField}
        required
      />
      <TextField
        variant="outlined"
        size="small"
        label="Location"
        color="secondary"
        placeholder="City name or 'Remote'"
        className={classes.TextField}
      />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <TextField
          type="date"
          color="secondary"
          className={classes.TextField}
          label="Started"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          type="date"
          color="secondary"
          className={classes.TextField}
          label="Ended"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
      </Box>
      <TextField
        InputProps={{ classes: { input: classes.desc }, rowsMax: 5 }}
        variant="outlined"
        color="secondary"
        label="Description"
        placeholder="* Start writing in bullet points..."
        multiline
        required
        className={classes.TextField}
        helperText="Markdown is supported :)"
      />
      <TextField
        type="link"
        label="Work link"
        variant="outlined"
        color="secondary"
        size="small"
        placeholder="Copy/Paste work link here"
        className={classes.TextField}
      />
      <Typography
        variant="caption"
        className={classes.hints}
        color="textPrimary"
      >
        Suggested Tags
      </Typography>
      <Box display="flex" justifyItems="space-between" pt={1}>
        {tags.map((item) => (
          <Chip
            key={item}
            variant="default"
            color="secondary"
            label={item}
            size="small"
            className={classes.tags}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ExperienceInfo;
