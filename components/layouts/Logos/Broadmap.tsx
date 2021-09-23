import { useColorModeValue } from "@chakra-ui/color-mode";
import Icon from "@chakra-ui/icon";

const BroadmapIcon = () =>
  useColorModeValue(
    <Icon
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="500" cy="500" r="475" stroke="#151515" strokeWidth="50" />
      <circle cx="500" cy="500" r="325" stroke="#151515" strokeWidth="50" />
      <circle cx="500" cy="500" r="200" fill="#151515" />
    </Icon>,
    <Icon
      viewBox="0 0 1000 1000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="500" cy="500" r="475" stroke="#FFFAFA" strokeWidth="50" />
      <circle cx="500" cy="500" r="325" stroke="#FFFAFA" strokeWidth="50" />
      <circle cx="500" cy="500" r="200" fill="#FFFAFA" />
    </Icon>
  );

export default BroadmapIcon;
