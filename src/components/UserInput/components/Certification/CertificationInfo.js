import {
  Box,
  Fab,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { CERTIFICATION_INFO } from "../../../../redux/actionTypes";
import { parseDate } from "../../../utils/Helpers";

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
  const dispatch = useDispatch();
  const [certificate, setCertificate] = useState({});
  const certifications = useSelector((state) => state.certificationInfo);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (e, index) => {
    e.preventDefault();
    const field = e.target.name;
    const value = parseDate(e.target.type, e.target.value);

    setCertificate({ ...certificate, [field]: value });
    setCurrentIndex(index);
  };

  React.useEffect(() => {
    dispatch({
      type: CERTIFICATION_INFO.UPDATE,
      payload: certificate,
      index: currentIndex,
    });
  }, [dispatch, certificate, currentIndex]);

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
        {certifications.map((item, index) => (
          <Paper elevation={2} className={classes.paper} key={item.id}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              color="secondary"
              className={classes.TextField}
              required
              onChange={(e) => handleChange(e, index)}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Issuing Authority"
              name="authority"
              color="secondary"
              placeholder="company name"
              className={classes.TextField}
              onChange={(e) => handleChange(e, index)}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Unique Certification ID"
              name="number"
              color="secondary"
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
                color="secondary"
                className={classes.TextField}
                label="Obtained"
                name="obtained"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => handleChange(e, index)}
              />
              <TextField
                type="date"
                color="secondary"
                className={classes.TextField}
                label="Expires"
                name="expires"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                onChange={(e) => handleChange(e, index)}
              />
            </Box>
            <TextField
              variant="outlined"
              size="small"
              label="Link"
              name="link"
              color="secondary"
              className={classes.TextField}
              onChange={(e) => handleChange(e, index)}
            />
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

export default CertificationInfo;
