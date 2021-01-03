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
import { useSelector } from "react-redux";
import ContactAt from "./ContactAt";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    wordBreak: "break-word"
  },
});

function Contact() {
  const classes = useStyles();
  const contactInfo = useSelector((state) => state.userInfo.contact);
  
  return (
    <div className={classes.root}>
      {Object.keys(contactInfo).map((item) => (
        <ContactAt key={item} socialMedia={item} link={contactInfo[item]} />
      ))}
    </div>
  );
}

export default Contact;
