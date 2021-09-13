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

import { Box, GridItem, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import { FiMap, FiSettings } from "react-icons/fi";
import SidebarSection from "./SidebarSection";
import SponsorCard from './SponsorCard';

const Sidebar = () => {
  const workspace = [
    {
      title: "Settings",
      icon: FiSettings,
      link: "/settings",
    },
    // {
    //   title: "Favorites",
    //   icon: FiStar,
    //   link: "",
    // },
    // {
    //   title: "Templates",
    //   icon: FiCopy,
    //   link: "", // /templates
    // },
    // {
    //   title: "Quick Share",
    //   icon: FiShare2,
    //   link: "", // /share
    // },
  ];

  const resources = [
    // {
    //   title: "Guide to Resuminator",
    //   icon: FiBook,
    //   link: "", // /docs/getting-started
    // },
    {
      title: "Broadmap",
      icon: FiMap,
      link: "http://broadmap.resuminator.in",
    },
    // {
    //   title: "Help Center",
    //   icon: FiHelpCircle,
    //   link: "", // /support
    // },
  ];

  return (
    <GridItem rowSpan={2} colSpan={1}>
      <Box
        alignItems="flex-start"
        flexDir="column"
        display="flex"
        height="100%"
        width="100%"
        aria-label="section"
        px={{ base: "1rem" }}
      >
        <VStack
          alignItems="flex-start"
          spacing="0"
          color={useColorModeValue("gray.600", "whiteAlpha")}
          width="100%"
          mb="4"
        >
          <SidebarSection sectionTitle="Workspace" items={workspace} />
          <SidebarSection sectionTitle="Resources" items={resources} />
        </VStack>
        <SponsorCard />
      </Box>
    </GridItem>
  );
};

export default Sidebar;
