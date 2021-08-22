import {
  AspectRatio,
  Box,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

const FourGrid = () => {
  return (
    <Box px="8" py="4">
      <Box py="4">
        <Text as="h1" fontSize="4xl" fontWeight="bold" letterSpacing={-2}>
          How we do this?
        </Text>
        <Text as="p" fontWeight="medium">
          What makes Resuminator land this sweet spot between customization and
          ease
        </Text>
      </Box>
      <SimpleGrid templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
        <Box py="4">
          <Text
            as="h2"
            fontWeight="bold"
            fontSize="2xl"
            letterSpacing="tighter"
            mb="4"
            color={useColorModeValue("purple.600", "purple.400")}
          >
            Drag-n-Drop Layouts
          </Text>
          <Text
            fontSize="sm"
            fontWeight="medium"
            color={useColorModeValue("gray.800", "gray.400")}
          >
            Each element inside your resume can be rearranged using simple drag
            and drop. Updating layouts would become a breeze when you are
            editing your resume!
          </Text>
          <AspectRatio maxW="100%" ratio={16 / 9} my="8">
            <Image
              src="/web/DnDR8.jpg"
              borderRadius="10px"
              shadow={useColorModeValue("md", "2xl")}
            />
          </AspectRatio>
        </Box>
        <Box py="4">
          <Text
            as="h2"
            fontWeight="bold"
            fontSize="2xl"
            letterSpacing="tighter"
            mb="4"
            color={useColorModeValue("orange.600", "orange.400")}
          >
            Easy Toggles
          </Text>
          <Text
            fontSize="sm"
            fontWeight="medium"
            color={useColorModeValue("gray.800", "gray.400")}
          >
            Keep the data, but hide the content OR simply convert your single
            column resume into a two-column one with a click. Easy toggle
            support allows you to put your best foot forward.
          </Text>
          <AspectRatio maxW="100%" ratio={16 / 9} my="8">
            <Image
              src="/web/DnDR8.jpg"
              borderRadius="10px"
              shadow={useColorModeValue("md", "2xl")}
            />
          </AspectRatio>
        </Box>
        <Box py="4">
          <Text
            as="h2"
            fontWeight="bold"
            fontSize="2xl"
            letterSpacing="tighter"
            mb="4"
            color={useColorModeValue("cyan.600", "cyan.400")}
          >
            Enhanced Design Controls
          </Text>
          <Text
            fontSize="sm"
            fontWeight="medium"
            color={useColorModeValue("gray.800", "gray.400")}
          >
            With a dedicated design panel, you get to control the look and feel
            of your resume. Add a color which matches your personality. Alter
            spacing to fit it more content.
          </Text>
          <AspectRatio maxW="100%" ratio={16 / 9} my="8">
            <Image
              src="/web/DnDR8.jpg"
              borderRadius="10px"
              shadow={useColorModeValue("md", "2xl")}
            />
          </AspectRatio>
        </Box>
        <Box py="4">
          <Text
            as="h2"
            fontWeight="bold"
            fontSize="2xl"
            letterSpacing="tighter"
            mb="4"
            color={useColorModeValue("green.600", "green.400")}
          >
            Customizable Sections
          </Text>
          <Text
            fontSize="sm"
            fontWeight="medium"
            color={useColorModeValue("gray.800", "gray.400")}
          >
            STOP paying to add certain sections on your resume. Create your own
            custom section in few clicks and use it like any native section for
            your resume. Add your achievements, contributions, hobbies,
            anything!
          </Text>
          <AspectRatio maxW="100%" ratio={16 / 9} my="8">
            <Image
              src="/web/DnDR8.jpg"
              borderRadius="10px"
              shadow={useColorModeValue("md", "2xl")}
            />
          </AspectRatio>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default FourGrid;
