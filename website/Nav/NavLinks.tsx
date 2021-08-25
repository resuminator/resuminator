import { Box, Button, ButtonGroup, HStack } from "@chakra-ui/react";
import React from "react";

interface Props {}

const navLinkDetails = [
  {
    label: "Features",
    link: "/#features",
  },
  {
    label: "Open Source",
    link: "/#open-source",
  },
  {
    label: "Sponsor",
    link: "/#sponsor",
  },
  {
    label: "Broadmap",
    link: "/#broadmap",
  },
  {
    label: "About Us",
    link: "/about",
  },
];

const NavLinks = (props: Props) => {
  return (
    <ButtonGroup spacing="4" isAttached alignSelf="center">
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
    </ButtonGroup>
  );
};

export default NavLinks;
