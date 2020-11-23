import {
  Box,
  Chip,
  Fab,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { EXPERIENCE_INFO } from "../../../../redux/actionTypes";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "1rem",
    borderColor: theme.palette.contrast.light,
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
  paper: {
    display: "flex",
    flexDirection: "column",
    minWidth: "25rem",
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

function ExperienceInfo() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tags = ["React", "UI/UX", "Testing"]; //Will be generated from Description Text's Topic Classification
  const [experience, setExperience] = useState({description: ``});
  const [currentIndex, setCurrentIndex] = useState(0);
  const experiences = useSelector((state) => state.experienceInfo);

  const handleChange = (e, index) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;

    setExperience({ ...experience, [field]: value });
    setCurrentIndex(index);
  };

  React.useEffect(() => {
    dispatch({
      type: EXPERIENCE_INFO.UPDATE,
      payload: experience,
      index: currentIndex,
    });
  }, [dispatch, experience, currentIndex]);

  
  // React.useEffect(()=> {
  //   const index = experiences.length - 1;
  //   dispatch({ type: EXPERIENCE_INFO.ADD, index: index });
  // },[dispatch, experiences]);

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
      <Box
        display="flex"
        alignItems="center"
        justifyItems="space-evenly"
        maxWidth="35rem"
        overflow="auto"
      >
        {experiences.map((item, index) => (
          <Paper elevation={2} className={classes.paper} key={item.id}>
            <TextField
              label="Company/Institution"
              name="company"
              variant="outlined"
              color="secondary"
              className={classes.TextField}
              required
              onChange={(e) => handleChange(e, index)}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Location"
              name="location"
              color="secondary"
              placeholder="City name or 'Remote'"
              className={classes.TextField}
              onChange={(e) => handleChange(e, index)}
            />
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <TextField
                type="date"
                name="start"
                color="secondary"
                className={classes.TextField}
                label="Started"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => handleChange(e, index)}
              />
              <TextField
                type="date"
                name="end"
                color="secondary"
                className={classes.TextField}
                label="Ended"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => handleChange(e, index)}
              />
            </Box>
            <TextField
              InputProps={{ classes: { input: classes.desc }, rowsMax: 5 }}
              variant="outlined"
              color="secondary"
              label="Description"
              name="description"
              placeholder="* Start writing in bullet points..."
              multiline
              required
              className={classes.TextField}
              helperText="Markdown is supported :)"
              onChange={(e) => handleChange(e, index)}
            />
            <TextField
              type="link"
              label="Work link"
              name="workLink"
              variant="outlined"
              color="secondary"
              size="small"
              placeholder="Copy/Paste work link here"
              className={classes.TextField}
              onChange={(e) => handleChange(e, index)}
            />
            <Typography
              variant="caption"
              className={classes.hints}
              color="textSecondary"
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
          </Paper>
        ))}
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

export default ExperienceInfo;
