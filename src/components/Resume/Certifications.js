import React from "react";
import { makeStyles } from "@material-ui/core";
import certificationInfo from "../Data/CertificationInfo";
import ColoredLine from "../Line";
import CertificationTitle from "./Certifications/CertificationTitle";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyItems: "flex-start",
    margin: 20,
  },
  title: {
    color: "#44318D",
    fontSize: 16,
    fontWeight: 400,
  },
  desc: {
    textAlign: "justify",
    paddingTop: 5,
    width: 300,
    fontFamily: "Roboto",
    fontSize: 10,
    opacity: 0.8,
    marginBottom: 5,
  },
  span: {
    fontWeight: 600,
  },
});

function Certifications() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="title" className={classes.title}>
        Certifications
      </div>
      <ColoredLine color="#44318D" opacity="0.5" />
      {certificationInfo.map((item) => (
        <React.Fragment key={item.id}>
          <CertificationTitle
            name={item.name}
            authority={item.authority}
            number={item.number}
            duration={{ start: item.obtained, end: item.expires }}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default Certifications;
