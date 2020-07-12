import React from "react";
import contactInfo from "../Data/ContactInfo";
import ContactAt from "./ContactAt";
import { makeStyles } from "@material-ui/core";

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
