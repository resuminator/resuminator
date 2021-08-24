import { mode } from "@chakra-ui/theme-tools";

const ScrollBarTheme = (props) => ({
  ".resume-inputs::-webkit-scrollbar": {
    display: "none",
  },
  ".viewer::-webkit-scrollbar": {
    display: "none",
  },
  "::-webkit-scrollbar": {
    width: "10px",
  },
  "::-webkit-scrollbar-thumb": {
    transition: "0.2s all",
    background: mode("rgba(150,150,150,0.5)", "rgba(255,255,255,0.2)")(props),
    borderRadius: "10px",
  },
  "::-webkit-scrollbar-thumb:hover": {
    background: mode("rgba(150,150,150,0.8)", "rgba(150,150,150,0.5)")(props),
  },
  "::-webkit-scrollbar-track": {
    background: mode("rgba(150,150,150,0.3)", "rgba(150,150,150,0.1)")(props),
  },
});

export default ScrollBarTheme;
