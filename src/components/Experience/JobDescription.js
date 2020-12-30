/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import ReactMarkdown from "react-markdown";

const useStyles = makeStyles((theme) => ({
  item: {
    fontFamily: theme.typography.fontFamily.secondary,
    fontSize: "0.9rem",
    marginBottom: "0.5rem",
    color: theme.palette.grey[800],
    lineHeight: 1.3,
  },
  link: {
    fontFamily: theme.typography.fontFamily.secondary,
    paddingLeft: "1rem",
    fontWeight: 400,
  },
}));

function JobDescription(props) {
  const classes = useStyles();
  let desc = props.desc;
  return (
    <Box textAlign="justify" p={1} pt={0}>
      <ReactMarkdown children={desc} className={classes.item} skipHtml={true} />
      {props.workLink ? (
        <Link href={props.workLink} target="_blank">
          <Typography variant="subtitle2" className={classes.link}>
            Work Link <FiExternalLink />
          </Typography>
        </Link>
      ) : null}
    </Box>
  );
}

export default JobDescription;
