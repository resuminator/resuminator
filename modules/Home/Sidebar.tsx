import {
  Box,
  GridItem,
  HStack,
  Icon,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FiSettings, FiStar } from "react-icons/fi";

const Sidebar = () => {
  const hoverProps = {
    bg: useColorModeValue("gray.100", "whiteAlpha.100"),
    color: useColorModeValue("blue.500", "blue.300"),
  };

  const options = [
    {
      title: "Manage Resumes",
      icon: FiSettings,
    },
    {
      title: "Favorites",
      icon: FiStar,
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
          {options.map((item) => (
            <HStack
              key={item.title}
              p="2"
              cursor="pointer"
              transition="0.2s all"
              width="inherit"
              borderRadius="10px"
              _hover={hoverProps}
            >
              <Icon as={item.icon} />
              <Text fontSize="sm">{item.title}</Text>
            </HStack>
          ))}
        </VStack>
      </Box>
    </GridItem>
  );
};

export default Sidebar;
