import React from "react";

function Title(props) {
  return (
    <div>
      <div style={{ color: "#121212", fontSize: 35, padding: 5 }}>
        {props.name}
      </div>
      <div style={{ color: "#44318D", fontSize: 14 }}>
        {props.jobTitle}
      </div>
    </div>
  );
}

export default Title;
