import ProgressBar from "@badrap/bar-of-progress";
import theme from "../../styles/theme";
import "./index.module.css";

const progress = new ProgressBar({
  size: 4,
  color: theme.colors.blue[300],
  className: "root",
  delay: 80,
});

export default progress;
