import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { LogoWithText } from "../layouts/Logos";

const Header = () => {
  return (
    <Box
      px={{ base: "1rem", md: "4rem", lg: "7rem" }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <LogoWithText mb="0" letterSpacing="tighter" />
      <Button colorScheme="purple" size="sm">
        Get Started
      </Button>
    </Box>
  );
};

export default Header;
