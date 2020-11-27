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
import contactInfo from "../../Data/ContactData";
import ContactAt from "./ContactAt";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {contactInfo.map((item) => (
        <ContactAt key={item.name} name={item.name} handle={item.handle} />
      ))}
    </div>
  );
}

export default Contact;
