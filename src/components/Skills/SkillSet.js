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

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    wordBreak: "break-word"
  },
  heading: {
    color: theme.palette.primary.light,
    fontWeight: 600,
    paddingBottom: "0.1rem"
  },
  list: {
    fontFamily: theme.typography.fontFamily.secondary,
    paddingBottom: "0.6rem",
  },
}));

function SkillSet({skillList, title}) {
  const classes = useStyles();

  const renderListStr = (skillList) => {
    let str = "";
    for (let i = 0; i < skillList.length; i++) {
      str =
        i !== skillList.length - 1
          ? str.concat(skillList[i], ", ")
          : str.concat(skillList[i], ".");
    }

    return str;
  };
  
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection="column"
      className={classes.root}
    >
      <Typography variant="body1" className={classes.heading}>{title}</Typography>
      <Typography variant="body2" color="textPrimary" className={classes.list}>{renderListStr(skillList)}</Typography>
    </Box>
  );
}

export default SkillSet;
