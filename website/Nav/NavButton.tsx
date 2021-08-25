import {
    Box,
    Button,
    Collapse,
    IconButton,
    Stack,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { navLinkDetails } from "./links";

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
      <Collapse in={isOpen} animateOpacity>
        <Stack
          minH="60vh"
          background={useColorModeValue("whiteAlpha.800", "gray.800")}
        >
          {navLinkDetails.map((item) => (
            <Button
              key={item.label}
              as="a"
              href={item.link}
              variant="ghost"
              size="sm"
              fontWeight="normal"
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
};

export default NavButton;
