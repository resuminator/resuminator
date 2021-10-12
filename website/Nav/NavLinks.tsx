/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Button, ButtonGroup, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { navLinkDetails, navLinkDetailsSmall } from "./links";

interface Props {}

const NavLinks = (props: Props) => {
  const links =
    useBreakpointValue({
      sm: navLinkDetailsSmall,
      xl: navLinkDetails
    }) || [];

  return (
    <ButtonGroup
      isAttached
      alignSelf="center"
      display={{ base: "none", lg: "initial" }}
    >
      {links.map((item) => (
        <Button
          colorScheme="blue"
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
