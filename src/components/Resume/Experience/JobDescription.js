import React from "react";
import { Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    textAlign: "justify",
    paddingTop: 2,
    lineHeight: 1.3,
  },
  item: {
    fontFamily: "Roboto",
    fontSize: "0.9em",
    opacity: 0.8,
    marginBottom: 8,
  },
  link: {
    fontFamily: "Karla",
    fontSize: "0.9em",
    opacity: 0.8,
    marginBottom: 8,
    fontWeight: 600,
  },
});

function JobDescription(props) {
  const classes = useStyles();
  let desc = props.desc;
  return (
    <div className={classes.root}>
      {desc.map((item, i) => {
        i++;
        return (
          <div className={classes.item} key={i}>
            • {item}
          </div>
        );
      })}
      <Link
        href={props.workLink}
        className={classes.link}
        color="#44318D"
        target="_blank"
      >
        Work Link
      </Link>
    </div>
  );
}

export default JobDescription;
