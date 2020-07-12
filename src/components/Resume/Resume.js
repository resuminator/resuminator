import React from "react";
import "./Resume.css";
import Title from "./Title";
import ColoredLine from "../Line";
import Contact from "./Contact";
import Experience from "./Experience";

const resumeStyle = {
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    //alignItems: "center",
    width: 595,
    height: 842,
    backgroundColor: "#fffffe",
    fontFamily: "Karla",
    margin: 25,
    right: 0,
  },
  left: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyItems: "flex-start",
  },
};

function Resume() {
  return (
    <div style={resumeStyle.root} className="shadow">
      <Title name="Vivek Nigam" jobTitle="Software Developer | ML Engineer" />
      <Contact />
      <ColoredLine color="#44318D" />
      <div style={resumeStyle.left}>
        <Experience />
      </div>
    </div>
  );
}

export default Resume;
