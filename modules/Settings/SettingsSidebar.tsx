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
import { FiAlertCircle, FiSettings, FiUser } from "react-icons/fi";
import SidebarSection, { SideBarItems } from "../Home/SidebarSection";

const SettingsSidebar = () => {
  const general: SideBarItems = [
    {
      title: "General",
      icon: FiSettings,
      link: "/settings"
    },
    {
      title: "Account",
      icon: FiUser,
      link: "/settings/account"
    },
    // {
    //   title: "Preferences",
    //   icon: FiCheckCircle,
    //   link: "",
    // },
    {
      title: "Advanced",
      icon: FiAlertCircle,
      link: "/settings/advanced"
    }
  ];
  return (
    <GridItem colSpan={1}>
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
          <SidebarSection
            items={general}
            itemProps={{
              size: "md"
            }}
          />
        </VStack>
      </Box>
    </GridItem>
  );
};

export default SettingsSidebar;
