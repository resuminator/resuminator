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
import skillsInfo from "../../Data/SkillsData";
import ColoredLine from "../common/Line";
import { TitleBox } from "../common/TitleBox";
import SkillSet from "./SkillSet";

const useStyles = makeStyles({
  title: {
    fontSize: "1.5em",
  },
});

function Skills() {
  const classes = useStyles();

  return (
    <TitleBox flexDirection="column">
      <Typography
        color="primary"
        variant="h1"
        id="title"
        className={classes.title}
      >
        Skills
      </Typography>
      <ColoredLine opacity={0.5} />
      {skillsInfo.map((item) => (
        <SkillSet key={item.id} title={item.title} skillList={item.skillList} />
      ))}
    </TitleBox>
  );
}

export default Skills;
