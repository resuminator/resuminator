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
import skillsInfo from "../../Data/SkillsData";
import ColoredLine from "../common/Line";
import SkillSet from "./SkillSet";

const useStyles = makeStyles({
  title: {
    fontSize: "1.5em",
  },
});

function Skills() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      pb={2}
    >
      <Typography color="primary" variant="h1" id="title" className={classes.title}>
        Skills
      </Typography>
      <ColoredLine color="#44318D" opacity="0.5" />
      {skillsInfo.map((item) => (
        <SkillSet key={item.id} title={item.title} skillList={item.skillList} />
      ))}
    </Box>
  );
}

export default Skills;
