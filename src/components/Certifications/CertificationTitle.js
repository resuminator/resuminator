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
import React, { Fragment } from "react";
import { FiExternalLink } from "react-icons/fi";
import { currentDate, parseDateView } from "../../utils/Helpers";
import { TitleBox } from "../common/TitleBox";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "1em",
    color: theme.palette.primary.light,
    fontWeight: 700,
    textAlign: "left",
    fontFamily: theme.typography.fontFamily.primary,
    paddingBottom: "0.1rem",
    lineHeight: 1.2,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    textDecoration: "none",
  },
  subtitle: {
    color: theme.palette.grey[900],
    fontSize: "0.9em",
    textAlign: "left",
  },
  duration: {
    color: theme.palette.grey[900],
    fontSize: "0.9em",
    textAlign: "left",
  },
  decoration: {
    padding: "0 0.2rem 0 0.2rem",
    fontSize: "0.9em",
  },
}));

function CertificationTitle({ name, authority, number, duration, link }) {
  const VerticalLine = () => {
    return (
      <Typography id="vline" className={classes.decoration}>
        |
      </Typography>
    );
  };
  const CenterDot = () => {
    return (
      <Typography id="cdot" className={classes.decoration}>
        •
      </Typography>
    );
  };

  const renderAuthorityName = () =>
    authority ? (
      <Typography id="authority" className={classes.subtitle}>
        {authority}
      </Typography>
    ) : null;

  const renderCredentialID = () =>
    number ? (
      <Fragment>
        {authority ? <VerticalLine /> : null}
        <Typography id="credID" className={classes.subtitle}>
          Credential ID: {number}
        </Typography>
      </Fragment>
    ) : null;

  const renderIssueDate = () =>
    duration.obtained ? (
      <Fragment>
        {authority || number ? <VerticalLine /> : null}
        <Typography id="issuedate" className={classes.duration}>
          Issued: {parseDateView(duration.obtained)}
        </Typography>
      </Fragment>
    ) : null;

  const renderExpireDate = () =>
    duration.expires && duration.expires !== currentDate() ? (
      <Fragment>
        <CenterDot />
        <Typography id="expiredate" className={classes.duration}>
          Expires: {parseDateView(duration.expires)}
        </Typography>
      </Fragment>
    ) : null;

  const renderName = () => {
    return link !== "" ? (
      <Link
        className={classes.title}
        component="a"
        target="_blank"
        href={link}
        id={`cert-${name}`}
      >
        {name}
        <FiExternalLink style={{ paddingLeft: "0.3rem" }} size="0.9rem" />
      </Link>
    ) : (
      <Typography id={`cert-${name}`} variant="h2" className={classes.title}>
        {name}
      </Typography>
    );
  };

  const classes = useStyles();
  return (
    <TitleBox id="Certification-Title" flexDirection="column">
      {renderName()}
      <Box display="flex" flexWrap="wrap" alignItems="center">
        {renderAuthorityName()}
        {renderCredentialID()}
        {renderIssueDate()}
        {renderExpireDate()}
      </Box>
    </TitleBox>
  );
}

export default CertificationTitle;
