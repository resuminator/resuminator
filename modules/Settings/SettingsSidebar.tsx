import { Box, GridItem, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiDatabase,
  FiFileText,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import SidebarSection, { SideBarItems } from "../Home/SidebarSection";

const SettingsSidebar = () => {
  const general: SideBarItems = [
    {
      title: "General",
      icon: FiSettings,
      link: "/settings",
    },
    {
      title: "Account",
      icon: FiUser,
      link: "/settings/account",
    },
    // {
    //   title: "Preferences",
    //   icon: FiCheckCircle,
    //   link: "",
    // },
    {
      title: "Resume",
      icon: FiFileText,
      link: "/settings/resume",
    },
    {
      title: "Advanced",
      icon: FiAlertCircle,
      link: "/settings/advanced",
    },
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
              size: "md",
            }}
          />
        </VStack>
      </Box>
    </GridItem>
  );
};

export default SettingsSidebar;
