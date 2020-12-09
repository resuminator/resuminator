/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { checkEmptyState } from "../../utils/Helpers";
import ColoredLine from "../common/Line";
import CertificationTitle from "./CertificationTitle";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1.5rem",
  },
}));

function Certifications() {
  const classes = useStyles();
  const certifications = useSelector((state) => state.certificationInfo.certifications);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      pb={2}
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
      <ColoredLine opacity="0.5" />
      {checkEmptyState(certifications) ? (
        <Typography variant="caption">
          Looks empty here. Add some certificates by clicking '+' on the left.
        </Typography>
      ) : (
        certifications.map((item) => (
          <CertificationTitle
            key={item.id}
            name={item.name}
            authority={item.authority}
            number={item.number}
            duration={{ obtained: item.obtained, expires: item.expires }}
          />
        ))
      )}
    </Box>
  );
}

export default Certifications;
