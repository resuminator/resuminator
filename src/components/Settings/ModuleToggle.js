/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import ViewToggle from "./ViewToggle";

const useStyles = makeStyles((theme) => ({
  root: {
    "@media (min-width:768px)": {
      height: "10rem",
    },
  },
}));

const getLabel = (item) => {
  switch (item) {
    case "edu":
      return "Education";
    case "exp":
      return "Experience";
    case "certs":
      return "Certifications";
    case "proj":
      return "Projects";
    case "skill":
      return "Skills";
    case "achievements":
        return "Achievements";
    default:
      return "";
  }
};

const ModuleToggle = () => {
  const classes = useStyles();
  const settings = useSelector((state) => state.settings);
  const modules = settings.modules;
  const combinedList = modules.left.concat(modules.right);
  const allModules = ["exp", "edu", "certs", "proj", "skill", "achievements"];

  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      className={classes.root}
    >
      {allModules.map((item) => (
        <Box
          key={item}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          p={0.5}
        >
          <ViewToggle
            name={item}
            label={getLabel(item)}
            show={combinedList.includes(item)}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ModuleToggle;
