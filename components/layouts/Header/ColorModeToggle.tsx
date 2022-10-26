import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface Props {}

const ColorModeToggle = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Color-Toggle"
      onClick={toggleColorMode}
      icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
      variant="ghost"
      colorScheme={useColorModeValue("gray", "blue")}
    />
  );
};

export default ColorModeToggle;
