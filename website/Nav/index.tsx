import {
  Box,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { LogoWithText } from "../../components/layouts/Logos";
import SectionLayout from "../common/SectionLayout";
import CollapseMenu from "./CollapseMenu";
import LoginSignupButtons from "./LoginSignupButtons";
import NavLinks from "./NavLinks";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

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
          <LoginSignupButtons display={{ base: "none", md: "initial" }} />
          <Box display={{ lg: "none" }}>
            <IconButton
              aria-label="Nav Menu Button"
              icon={<FiMenu />}
              variant="ghost"
              colorScheme={useColorModeValue("gray", "blue")}
              onClick={onToggle}
            />
          </Box>
        </HStack>
      </Box>
      <CollapseMenu onToggle={onToggle} isOpen={isOpen} />
    </SectionLayout>
  );
};

export default Nav;
