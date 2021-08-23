import {
  Box,
  Button,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { LogoWithText } from "../../components/layouts/Logos";
import SectionLayout from "../common/SectionLayout";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <SectionLayout>
      <Box
        py="4"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <LogoWithText
          mb="0"
          letterSpacing={useBreakpointValue({ base: -1, md: -1.5, lg: -2 })}
          fontSize={{ base: "xl", md: "2xl", xl: "3xl" }}
        />
        <HStack>
          <IconButton
            aria-label="Color-Toggle"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
            variant="ghost"
            colorScheme={useColorModeValue("gray", "blue")}
          />
          <Button
            colorScheme="blue"
            size={useBreakpointValue({ base: "sm", lg: "md" })}
            variant="outline"
            display={{ base: "none", md: "initial" }}
          >
            Log in
          </Button>
          <Button
            colorScheme="blue"
            size={useBreakpointValue({ base: "sm", lg: "md" })}
            variant="solid"
            rightIcon={<FiArrowRight />}
            display={{ base: "none", md: "initial" }}
          >
            Sign up
          </Button>
          <Button
            colorScheme="blue"
            size="sm"
            variant="solid"
            rightIcon={<FiArrowRight />}
            display={{ md: "none" }}
          >
            Get Started
          </Button>
        </HStack>
      </Box>
    </SectionLayout>
  );
};

export default Nav;
