/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { currentDate, parseDateView } from "../../utils/Helpers";
import { TitleBox } from "../common/TitleBox";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1em",
    color: theme.palette.primary.light,
    fontWeight: 700,
    textAlign: "left",
  },
  subtitle: {
    color: theme.palette.grey[800],
    fontSize: "0.9em",
    textAlign: "left",
  },
}));

function CertificationTitle(props) {
  const classes = useStyles();
  return (
    <TitleBox id="Certification-Title" flexDirection="column">
      <Typography id="name" variant="h2" className={classes.title}>
        {props.name}
      </Typography>
      <Typography
        id="authority"
        variant="subtitle1"
        className={classes.subtitle}
      >
        {props.authority} {props.number ? ` | ${props.number}` : null}{" "}
        {props.duration.expires !== currentDate() ? ` | Expires: ${parseDateView(props.duration.expires)}` : null}
      </Typography>
    </TitleBox>
  );
}

export default CertificationTitle;
