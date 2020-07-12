import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        textAlign: "justify",
        paddingTop: 5,
        width: 300,
    },
    item:{
        fontFamily: "Roboto",
        fontSize: 10,
        opacity: 0.8,
        marginBottom: 5
    }
})

function JobDescription(props) {
const classes = useStyles();
let desc = props.desc;
  return (
    <div className={classes.root}>
      {desc.map((item, i) => {i++; return <div className={classes.item} key={i}> - {item}</div>})}
    </div>
  );
}

export default JobDescription;
