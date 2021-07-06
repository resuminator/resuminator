import {
  Box, GridItem, Text,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import React from "react";
import { FiSettings, FiStar } from "react-icons/fi";
import SidebarOptions from "./SidebarOptions";

const Sidebar = () => {
  const options = [
    {
      title: "Manage Resumes",
      icon: FiSettings,
      isDisabled: false,
    },
    {
      title: "Favorites",
      icon: FiStar,
      isDisabled: false,
    },
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
          <Text
            fontSize="sm"
            color="InactiveCaptionText"
            fontWeight="semibold"
            letterSpacing="wider"
            textTransform="uppercase"
            pb="2"
          >
            Workspace
          </Text>
          <SidebarOptions itemList={options} />
        </VStack>
      </Box>
    </GridItem>
  );
};

export default Sidebar;
