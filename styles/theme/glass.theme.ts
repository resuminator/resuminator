import { mode } from "@chakra-ui/theme-tools";

const Frost = (props) => ({
  ".frost": {
    "backdropFilter": "blur(3px)",
    background: mode("rgba(255, 255, 255, 0.04)", "rgba(0, 0, 0, 0.04)")(props),
  },
});

export default Frost;
