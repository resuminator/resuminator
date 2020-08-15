import React from "react";
import { makeStyles } from "@material-ui/core";
import experienceInfo from "../Data/ExperienceInfo";
import JobTitle from "./Experience/JobTitle";
import JobDescription from "./Experience/JobDescription";
import Tags from "./Experience/Tags";
import ColoredLine from "../Line";

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
  box: {
    width: "100%"
  },
  exp: {
    width: "100%"
  }
});

function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="title" className={classes.title}>
        Experience
      </div>
      <ColoredLine color="#44318D" opacity="0.5"/>
      <div id="exp-boxes" className={classes.box}>
        {experienceInfo.map((item) => (
          <div id={`${item.company}-exp`} className={classes.exp} key={item.id}>
            <JobTitle
              title={item.jobTitle}
              company={item.company}
              addInfo={item.additionalInfo}
              duration={{ start: item.start, end: item.end }}
              location={item.location}
            />
            <JobDescription desc={item.description} />
            <Tags tags={item.tags}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
