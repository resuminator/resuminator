import React from "react";
import Resume from "./Resume/Resume";

const styles = {
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end"
  },
};

function Content() {
  return (
    <div id="main" style={styles.root}>
      <Resume />
    </div>
  );
}

export default Content;
