import { Box, GridItem, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import { FiMap, FiSettings } from "react-icons/fi";
import SidebarSection from "./SidebarSection";

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
      </Box>
    </GridItem>
  );
};

export default Sidebar;
