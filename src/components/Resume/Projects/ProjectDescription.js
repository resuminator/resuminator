import React from 'react'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        textAlign: "left",
        paddingTop: 5,
        width: 240,
        fontFamily: "Roboto",
        fontSize: 10,
        opacity: 0.8,
        marginBottom: 5
    },
})

function ProjectDescription(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
          {props.desc}  
        </div>
    )
}

export default ProjectDescription
