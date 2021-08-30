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

import { Stack, StackProps } from "@chakra-ui/layout";
import React from "react";
import LinkText from "../../common/LinkText";

interface Props {
  links?: Array<{ label?: string; link?: string }>;
}

const LinkStack: React.FC<Props & StackProps> = ({ links, ...props }) => {
  return (
    <Stack
      py={{ base: "4", md: "0" }}
      spacing={{ base: "2", md: "8" }}
      color="whiteAlpha.900"
      direction={{ base: "column", md: "row" }}
      {...props}
    >
      {links.map((item) => (
        <LinkText key={item.label} href={item.link} fontWeight="medium">
          {item.label}
        </LinkText>
      ))}
    </Stack>
  );
};

export default LinkStack;
