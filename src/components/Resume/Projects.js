import React from "react";
import { makeStyles } from "@material-ui/core";
import ColoredLine from "../Line";
import projectsInfo from "../Data/ProjectsInfo";
import ProjectTitle from "./Projects/ProjectTitle";
import ProjectDescription from "./Projects/ProjectDescription";
import Tags from "./Experience/Tags";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyItems: "flex-start",
    width: "100%",
    marginTop: 20,
    marginBottom: 20
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

function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="title" className={classes.title}>
        Projects
      </div>
      <ColoredLine color="#44318D" opacity="0.5" />
      {projectsInfo.map((item) => (
        <React.Fragment key={item.id}>
          <ProjectTitle
            title={item.projectTitle}
            company={item.company}
            addInfo={item.additionalInfo}
          />
          <ProjectDescription desc={item.description}/>
          <Tags tags={item.tags}/>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Projects;
