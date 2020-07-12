import React from "react";
import { makeStyles } from "@material-ui/core";
import experienceInfo from "../Data/ExperienceInfo";
import JobTitle from "./Experience/JobTitle";
import JobDescription from "./Experience/JobDescription";
import Tags from "./Experience/Tags";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyItems: "flex-start",
    margin: 20,
    marginBottom: 0
  },
  title: {
    color: "#44318D",
    fontSize: 16,
    fontWeight: 400,
  },
});

function Experience() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="title" className={classes.title}>
        Experience
      </div>
      <div>
        {experienceInfo.map((item) => (
          <React.Fragment key={item.id}>
            <JobTitle
              title={item.jobTitle}
              company={item.company}
              addInfo={item.additionalInfo}
              duration={{ start: item.start, end: item.end }}
              location={item.location}
            />
            <JobDescription desc={item.description} />
            <Tags tags={item.tags}/>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Experience;
