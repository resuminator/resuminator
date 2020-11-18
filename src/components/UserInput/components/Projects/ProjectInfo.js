import { Box, Chip, makeStyles, TextField, Typography } from "@material-ui/core";
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
    minHeight: "3rem",
  },
  tags: {
    marginRight: "0.2rem",
  },
}));

function ProjectInfo() {
  const classes = useStyles();
  const tags = ["Demo_1", "Demo_2", "Demo_3"]; 

  return (
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <Typography color="primary" variant="body1" className={classes.heading}>
        Showcase your best work!
      </Typography>
      <Typography
        color="textSecondary"
        variant="subtitle1"
        className={classes.subtitle}
      >
        Add details about your top 2/3 projects which align with your job
        profile!
      </Typography>
      <TextField
        label="Project Name"
        variant="outlined"
        color="secondary"
        className={classes.TextField}
        required
      />
      <TextField
        InputProps={{ classes: { input: classes.desc }, rowsMax: 2 }}
        variant="outlined"
        color="secondary"
        label="What it is about?"
        placeholder="Write a short description about your role in the project"
        multiline
        className={classes.TextField}
      />
      <TextField
        variant="outlined"
        size="small"
        label="Where to find it?"
        type="link"
        color="secondary"
        placeholder="Github/Website/Blog link"
        className={classes.TextField}
      />
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

export default ProjectInfo;
