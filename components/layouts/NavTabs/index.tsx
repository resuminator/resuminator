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

import { ButtonGroup } from "@chakra-ui/button";
import { Box, Divider } from "@chakra-ui/layout";
import React from "react";
import TabButton from "./TabButton";

interface TabItem {
  label: string;
  link: string;
  key: string;
}

interface Props {
  id: string | string[];
  currentRoute: string;
}

const NavTabs: React.FC<Props> = ({ id, currentRoute }) => {
  const getDefaultTabs = (id: Props["id"]): Array<TabItem> => [
    { key: "home", label: "Home", link: "/home" },
    { key: "create", label: "Create", link: `/create/${id}` },
    { key: "design", label: "Design", link: `/design/${id}` },
    { key: "share", label: "Download", link: `/share/${id}` }
  ];

  const tabs = getDefaultTabs(id);

  return (
    <Box pos="relative" left="40px">
      <ButtonGroup isAttached px="4">
        {tabs.map((tabitem) => (
          <TabButton
            key={tabitem.key}
            isSelected={currentRoute.split("/").includes(tabitem.key)}
            href={tabitem.link}
            isDisabled={tabitem.key !== "home" && !id.length}
          >
            {tabitem.label}
          </TabButton>
        ))}
      </ButtonGroup>
      <Divider />
    </Box>
  );
};

export default NavTabs;
