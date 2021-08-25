import {
  Box,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";

const NavButton = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <IconButton
        aria-label="Nav Menu Button"
        icon={<FiMenu />}
        variant="ghost"
        colorScheme={useColorModeValue("gray", "blue")}
        onClick={onToggle}
      />
    </Box>
  );
};

export default NavButton;
