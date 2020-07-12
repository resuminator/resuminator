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
    margin: 20,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: "auto"
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
