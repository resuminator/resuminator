import {
  Box,
  Button,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { LogoWithText } from "../../components/layouts/Logos";
import SectionLayout from "../common/SectionLayout";
import NavButton from "./NavButton";
import NavLinks from "./NavLinks";

const Nav = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const afterElement = {
    zIndex: "-1",
    content: '""',
    background: "inherit",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  const routeToLogin = () => {
    router.push("/login");
  };

  const routeToSignup = () => {
    router.push("/signup");
  };

  return (
    <SectionLayout
      className="frost"
      pt="4"
      pb="2"
      position="fixed"
      top="0"
      left="0"
      minW="100%"
      zIndex="4"
      _after={afterElement}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <LogoWithText
          mb="0"
          letterSpacing={useBreakpointValue({ base: -1, md: -1.5, lg: -2 })}
          width={useBreakpointValue({ base: "128px", md: "160px" })}
          height={useBreakpointValue({ base: "25.6px", md: "32px" })}
        />
        <HStack>
          <NavLinks />
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
            onClick={routeToLogin}
          >
            Log in
          </Button>
          <Button
            colorScheme="blue"
            size={useBreakpointValue({ base: "sm", lg: "md" })}
            variant="solid"
            rightIcon={<FiArrowRight />}
            display={{ base: "none", md: "initial" }}
            onClick={routeToSignup}
          >
            Sign up
          </Button>
          <NavButton />
        </HStack>
      </Box>
    </SectionLayout>
  );
};

export default Nav;
