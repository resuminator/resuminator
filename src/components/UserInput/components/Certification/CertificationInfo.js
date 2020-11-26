/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CERTIFICATION_INFO } from "../../../../redux/actionTypes";
import FloatingAddButton from "../../../FloatingAddButton";
import RemoveButton from "../../../RemoveButton";
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
  const [expires, setExpires] = useState({ state: false, date: "" });
  const [certificate, setCertificate] = useState({});
  const certifications = useSelector((state) => state.certificationInfo);
  const [currId, setCurrId] = useState(0);

  const handleAdd = () => {
    setCertificate({});
    const len = certifications.length;
    const id = len ? certifications[len - 1].id + 1 : 0;
    dispatch({ type: CERTIFICATION_INFO.ADD, id });
  };

  const handleDelete = (id) => {
    setCertificate({});
    dispatch({ type: CERTIFICATION_INFO.DELETE, id });
  };

  const handleChange = (e, id) => {
    setCurrId(id);

    if (e.target.id === "expires") {
      setExpires({
        state: !expires.state,
        date: parseDate(e.target.type, e.target.value),
      });
      const endValue = expires.state ? expires.date : "Never";
      setCertificate({ expires: endValue });
      return;
    }

    e.preventDefault();
    const field = e.target.name;
    const value = parseDate(e.target.type, e.target.value);

    setCertificate({ [field]: value });
  };

  React.useEffect(() => {
    setCertificate({});
  }, [currId]);

  React.useEffect(() => {
    dispatch({
      type: CERTIFICATION_INFO.UPDATE,
      payload: certificate,
      id: currId,
    });
  }, [dispatch, certificate, currId]);

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
      <Box
        display="flex"
        alignItems="center"
        justifyItems="space-evenly"
        width="35rem"
        overflow="auto"
      >
        {certifications.map((item) => (
          <Paper elevation={2} className={classes.paper} key={item.id}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              color="secondary"
              className={classes.TextField}
              value={item.name}
              required
              onChange={(e) => handleChange(e, item.id)}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Issuing Authority"
              name="authority"
              color="secondary"
              placeholder="company name"
              value={item.authority}
              className={classes.TextField}
              onChange={(e) => handleChange(e, item.id)}
            />
            <TextField
              variant="outlined"
              size="small"
              label="Unique Certification ID"
              name="number"
              color="secondary"
              value={item.number}
              className={classes.TextField}
              onChange={(e) => handleChange(e, item.id)}
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
                onChange={(e) => handleChange(e, item.id)}
              />
              <TextField
                type="date"
                color="secondary"
                className={classes.TextField}
                label="Expires"
                name="expires"
                variant="outlined"
                disabled={item.expires === 'Never'}
                InputLabelProps={{ shrink: true }}
                onChange={(e) => handleChange(e, item.id)}
              />
            </Box>
            <FormControlLabel
              className={classes.checkbox}
              control={
                <Checkbox
                  checked={item.expires === 'Never'}
                  onChange={(e) => handleChange(e, item.id)}
                  name="end"
                  color="primary"
                  id="expires"
                />
              }
              label="Never Expires"
            />
            <TextField
              variant="outlined"
              size="small"
              label="Link"
              name="link"
              color="secondary"
              value={item.link}
              className={classes.TextField}
              onChange={(e) => handleChange(e, item.id)}
            />
            <RemoveButton onClick={() => handleDelete(item.id)} />
          </Paper>
        ))}
        <FloatingAddButton onClick={handleAdd} />
      </Box>
    </Box>
  );
}

export default CertificationInfo;
