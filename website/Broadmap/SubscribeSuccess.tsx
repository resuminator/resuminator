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

import {
  Box,
  Button,
  Text,
  useBreakpointValue,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { BROADMAP_SHARE_TWITTER } from "../../data/RefLinks";
import mp from "../../services/mixpanel";

const SubscribeSuccess = () => {
  const trackMetric = () => {
    mp.track("Broadmap", { action: "Share CTA Trigger" });
  };

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
        onClick={trackMetric}
      >
        Share on Twitter
      </Button>
    </Box>
  );
};

export default SubscribeSuccess;
