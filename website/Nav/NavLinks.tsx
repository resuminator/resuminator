import { Button, ButtonGroup, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { navLinkDetails, navLinkDetailsSmall } from "./links";

interface Props {}

const NavLinks = (props: Props) => {
  const links =
    useBreakpointValue({
      sm: navLinkDetailsSmall,
      xl: navLinkDetails,
    }) || [];

  return (
    <ButtonGroup
      isAttached
      alignSelf="center"
      display={{ base: "none", lg: "initial" }}
    >
      {links.map((item) => (
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
