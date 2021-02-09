/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { TitleBox } from "../common/TitleBox";

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.light,
    fontWeight: 600,
    paddingBottom: "0.1rem",
    lineHeight: 1.2,
  },
  subtitle: {
    color: theme.palette.grey[600],
  },
  link: {
    fontFamily: theme.typography.fontFamily.primary,
    display: "flex",
    alignItems: "center",
    paddingLeft: "1rem",
    fontWeight: 400,
    float: "right",
    textDecoration: "underline",
    fontSize: "0.9rem",
  },
}));

function ProjectTitle({ title, link }) {
  const classes = useStyles();
  return (
    <TitleBox>
      <Typography
        component="div"
        id="title"
        variant="body1"
        className={classes.title}
      >
        {title}
      </Typography>
      {link ? (
        <Link href={link} target="_blank">
          <Typography className={classes.link} component="div">
            Link{" "}
            <FiExternalLink style={{ paddingLeft: "0.2rem" }} size="0.9rem" />
          </Typography>
        </Link>
      ) : null}
    </TitleBox>
  );
}
export default ProjectTitle;
