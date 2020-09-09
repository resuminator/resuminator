import React from "react";
import { makeStyles } from "@material-ui/core";
import educationInfo from "../Data/EducationInfo";
import EducationTitle from "./Education/EducationTitle";
import ColoredLine from "../Line";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyItems: "flex-start",
    width:"100%",
    marginTop: 20,
    marginBottom: 20
  },
  title: {
    color: "#44318D",
    fontSize: "1.5em",
    fontWeight: 400,
  },
  desc: {
    textAlign: "justify",
    paddingTop: 5,
    fontFamily: "Roboto",
    fontSize: "0.9em",
    opacity: 0.8,
    marginBottom: 5,
    width:"100%"
  },
  span: {
    fontWeight: 600
  },
  box: {
    width: "100%"
  },
  exp: {
    width: "100%"
  }
});

function Education() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="title" className={classes.title}>
        Education
      </div>
      <ColoredLine color="#44318D" opacity="0.5"/>
      <div id="edu-boxes" className={classes.box}>
        {educationInfo.map((item) => (
          <div id={`${item.institute}-edu`} className={classes.exp} key={item.id}>
            <EducationTitle
              institute={item.institute}
              location={item.location}
              stream={item.stream}
              duration={{ start: item.start, end: item.end }}
              grade={item.grade}
              degree={item.degree}
              total={item.total}
            />
            <div className={classes.desc}>
              <span className={classes.span}>Activities & Societies: </span>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
