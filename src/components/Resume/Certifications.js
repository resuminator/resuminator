/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import certificationInfo from "../../Data/CertificationInfo";
import ColoredLine from "../utils/Line";
import CertificationTitle from "./Certifications/CertificationTitle";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.5rem",
  },
}));

function Certifications() {
  const classes = useStyles();
  const certifications = useSelector((state) => state.certificationInfo);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      pt={3}
      flexGrow={1}
    >
      <Typography
        id="title"
        variant="h1"
        color="primary"
        className={classes.title}
      >
        Certifications
      </Typography>
      <ColoredLine color="#44318D" opacity="0.5" />
      {certifications.map((item) => (
        <CertificationTitle
          key={item.id}
          name={item.name}
          authority={item.authority}
          number={item.number}
          duration={{ start: item.obtained, end: item.expires }}
        />
      ))}
    </Box>
  );
}

export default Certifications;
