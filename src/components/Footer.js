import React from "react";

const styles = {
  root: {
    position: "relative",
    left: 0,
    bottom: 0,
    width: "100%",
    height: 50,
    textAlign: "center",
    display: "flex",
    backgroundColor: "#2A1B3D",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    fontSize: 10,
    color: "#EAE7DC",
  },
};

function Footer() {
  return (
    <footer style={styles.root}>
      <div id="footer-content" style={styles.content}>
        Developed by Vivek Nigam | 2020
      </div>
    </footer>
  );
}

export default Footer;
