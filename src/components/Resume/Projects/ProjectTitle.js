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
import { Box, Link, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.light,
    fontWeight: 600,
    paddingBottom: "0.1rem",
    lineHeight: 1.2
  },
  subtitle: {
    color: theme.palette.grey[600]
  },
}));

function ProjectTitle(props) {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Typography id="title" variant="body1" className={classes.title}>
        <Link href={props.projectLink} target="_blank">
          {props.title}
        </Link>
      </Typography>
      <Typography id="company" variant="body2" className={classes.subtitle}>
        {props.company} {props.addInfo ? `, ${props.addInfo}` : null}
      </Typography>
    </Box>
  );
}
export default ProjectTitle;
