import React, { useState } from "react";
import Resume from "./Resume/Resume";
import { Button, makeStyles, Tooltip } from "@material-ui/core";
import NewWindow from "react-new-window";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  btn: {
    marginLeft: 40,
  },
});

const printConfig = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    zoom: 1.35,
    width: 595,
    height: 842,
    backgroundColor: "#fffffe",
    fontFamily: "Karla",
    margin: 0,
    right: 0,
  },
});

function Content() {
  const [print, showPrint] = useState(false);
  const classes = useStyles();
  const config = printConfig();

  return (
    <div id="main" className={classes.root}>
      <Tooltip title="Click to see printable resume">
        <Button className={classes.btn} onClick={() => showPrint(!print)}>
          Print Resume
        </Button>
      </Tooltip>
      {print ? (
        <NewWindow title="Your Resume">
          <Resume config={config.root} />
        </NewWindow>
      ) : null}
      <Resume />
    </div>
  );
}

export default Content;
