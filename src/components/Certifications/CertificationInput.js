/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { parseDate } from "../../utils/Helpers";
import { CustomCheckbox } from "../common/CustomCheckbox";
import FloatingAddButton from "../common/FloatingAddButton";
import { InputCard } from "../common/InputCard";
import { InputHeader } from "../common/InputHeader";
import RemoveButton from "../common/RemoveButton";
import {
  addCertificate,
  deleteCertificateById,
  updateCertificateById
} from "./certificationActions";

const useStyles = makeStyles((theme) => ({
  TextField: {
    marginTop: "1rem",
  },
  desc: {
    minHeight: "2rem",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function CertificationInput() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expires, setExpires] = useState({ state: false, date: "" });
  const [certificate, setCertificate] = useState({});
  const certifications = useSelector((state) => state.certificationInfo);
  const [currId, setCurrId] = useState(0);
  const scrollRef = useHorizontalScroll();

  const handleAdd = () => {
    setCertificate({});
    dispatch(addCertificate(certifications));
  };

  const handleDelete = (id) => {
    setCertificate({});
    dispatch(deleteCertificateById(id));
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
    dispatch(updateCertificateById(currId, certificate));
  }, [dispatch, certificate, currId]);

  return (
    <Box display="flex" flexDirection="column" mt={1} p={2}>
      <InputHeader
        heading="Got any certifications?"
        subtitle="Add your professional certifications with certification ID and/or Link"
      />
      <Box
        display="flex"
        alignItems="center"
        justifyItems="space-evenly"
        width="35rem"
        overflow="auto"
        ref={scrollRef}
      >
        {certifications.map((item) => (
          <InputCard key={item.id}>
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
                disabled={item.expires === "Never"}
                InputLabelProps={{ shrink: true }}
                onChange={(e) => handleChange(e, item.id)}
              />
            </Box>
            <CustomCheckbox
              checked={item.expires === "Never"}
              onChange={(e) => handleChange(e, item.id)}
              name="end"
              color="primary"
              id="expires"
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
          </InputCard>
        ))}
        <FloatingAddButton onClick={handleAdd} />
      </Box>
    </Box>
  );
}

export default CertificationInput;
