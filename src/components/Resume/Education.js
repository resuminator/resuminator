import React from "react";
import { makeStyles } from "@material-ui/core";
import educationInfo from "../Data/EducationInfo";
import EducationTitle from "./Education/EducationTitle";

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
    fontWeight: 600
  }
});

function Education() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="title" className={classes.title}>
        Education
      </div>
      <div>
        {educationInfo.map((item) => (
          <React.Fragment key={item.id}>
            <EducationTitle
              institute={item.institute}
              location={item.location}
              stream={item.stream}
              duration={{ start: item.start, end: item.end }}
              grade={item.grade}
            />
            <div className={classes.desc}>
              <span className={classes.span}>Activities & Societies: </span>
              {item.description}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Education;
