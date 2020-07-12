import React from "react";

const headerStyle = {
  box: {
    fontFamily: "Karla",
    fontWeight: 200,
    width: "100%",
    height: 80,
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    marginLeft: 50,
    color: "#000000",
  },
  subtitle: {
    marginLeft: 50,
    color: "#000000",
    fontSize: 11,
    opacity: 0.5,
  },
};

function Header() {
  return (
    <header id="header" style={headerStyle.box}>
      <div id="header-title" style={headerStyle.title}>
        Resuminator
      </div>
      <div id="header-subtitle" style={headerStyle.subtitle}>
        Create beautiful single page resumes
      </div>
    </header>
  );
}

export default Header;
