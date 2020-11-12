import React from "react";

export default function ColoredLine(props) {
  return (
    <hr
      style={{
        color: props.color,
        backgroundColor: props.color,
        width: "100%",
        height: 1,
        opacity: props.opacity || 1,
        borderStyle: "inset",
        borderWidth: 0,
        overflow: "hidden"
      }}
    />
  );
}
