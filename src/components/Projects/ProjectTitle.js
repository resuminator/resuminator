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
  root: {
    color: theme.palette.primary.light,
    fontFamily: theme.typography.fontFamily.primary,
    fontWeight: 600,
    paddingBottom: "0.1rem",
    lineHeight: 1.2,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    textDecoration: "none"
  },
}));

function ProjectTitle({ title, link }) {
  const classes = useStyles();

  const renderTitle = () => {
    return link !== "" ? (
      <Link
        className={classes.root}
        component="a"
        target="_blank"
        href={link}
      >
        {title}
        <FiExternalLink style={{ paddingLeft: "0.2rem" }} size="0.9rem" />
      </Link>
    ) : (
      <Typography
        component="div"
        id="title"
        variant="body1"
        className={classes.root}
      >
        {title}
      </Typography>
    );
  };

  return <TitleBox>{renderTitle()}</TitleBox>;
}
export default ProjectTitle;
