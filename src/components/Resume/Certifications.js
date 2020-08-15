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
    width: "100%"
  },
  title: {
    color: "#44318D",
    fontSize: "1.5em",
    fontWeight: 400,
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
        <div key={item.id}>
          <CertificationTitle
            name={item.name}
            authority={item.authority}
            number={item.number}
            duration={{ start: item.obtained, end: item.expires }}
          />
        </div>
      ))}
    </div>
  );
}

export default Certifications;
