/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { makeStyles } from "@material-ui/core";
import React from "react";
import LOGO_IMG from "../../images/Resuminator_logo.png";

const useStyles = makeStyles({
  logo: {
    width: "3rem",
  },
});

const ShortLogo = () => {
  const classes = useStyles();
  return (
    <a href="/">
      <img src={LOGO_IMG} className={classes.logo} alt="Resuminator" />
    </a>
  );
};

export default ShortLogo;
