import {
  Box,
  Button,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { BROADMAP_SHARE_TWITTER } from "../../data/RefLinks";

const SubscribeSuccess = () => {
  return (
    <Box flexBasis={{ md: "50%", lg: "40%" }} alignSelf="center">
      <Text
        fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
        fontWeight="semibold"
        mb="2"
        color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
      >
        Just one final step left!
      </Text>
      <Text
        fontSize={{ base: "md", xl: "lg" }}
        mb="8"
        color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
        fontWeight="semibold"
      >
        Confirm your subscription by following the link sent to your inbox.
      </Text>
      <Text
        fontSize={{ base: "md", xl: "lg" }}
        mb="2"
        color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
      >
        Also share the word around for your curious friends and collegues
      </Text>

      <Button
        as="a"
        href={BROADMAP_SHARE_TWITTER}
        target="_blank"
        colorScheme="twitter"
        leftIcon={<FaTwitter />}
        size={useBreakpointValue({ base: "sm", lg: "md" })}
      >
        Share on Twitter
      </Button>
    </Box>
  );
};

export default SubscribeSuccess;
