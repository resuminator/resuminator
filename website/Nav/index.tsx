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

const Nav = () => {
  const router = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  const routeToLogin = () => {
    router.push("/login");
  };

  const routeToSignup = () => {
    router.push("/signup");
  };

  return (
    <SectionLayout pt="4" pb="0">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <LogoWithText
          mb="0"
          letterSpacing={useBreakpointValue({ base: -1, md: -1.5, lg: -2 })}
          width={useBreakpointValue({ base: "128px", md: "160px" })}
          height={useBreakpointValue({ base: "25.6px", md: "32px" })}
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
          <Button
            colorScheme="blue"
            size="sm"
            variant="solid"
            rightIcon={<FiArrowRight />}
            display={{ md: "none" }}
            onClick={routeToSignup}
          >
            Get Started
          </Button>
        </HStack>
      </Box>
    </SectionLayout>
  );
};

export default Nav;
