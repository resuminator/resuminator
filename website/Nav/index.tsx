import {
  Box,
  Button,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { LogoWithText } from "../../components/layouts/Logos";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      px={{ base: "1rem", md: "4rem", lg: "7rem" }}
      py="4"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <LogoWithText mb="0" letterSpacing="tighter" />
      <HStack>
        <IconButton
          aria-label="Color-Toggle"
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          variant="ghost"
          colorScheme={useColorModeValue("gray", "blue")}
        />
        <Button colorScheme="blue" size="sm" variant="outline">
          Log in
        </Button>
        <Button
          colorScheme="blue"
          size="sm"
          variant="solid"
          rightIcon={<FiArrowRight />}
        >
          Sign up
        </Button>
      </HStack>
    </Box>
  );
};

export default Nav;
