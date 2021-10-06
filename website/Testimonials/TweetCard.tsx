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
  Avatar,
  Box,
  HStack,
  Icon,
  Link,
  Text,
  TextProps,
  useColorModeValue
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import mp from "../../services/mixpanel";

export interface TweetCardProps {
  name: string;
  handle: string;
  image?: string;
  date?: string;
  content: string;
  url: string;
}

const TweetCard: React.FC<TweetCardProps> = ({
  name,
  image,
  date,
  handle,
  content,
  url
}) => {
  const tweetMetaProps: TextProps = {
    fontSize: { base: "sm", md: "md" }
  };

  const tweetContentProps: TextProps = {
    fontSize: { base: "sm", md: "md" }
  };

  const trackMetric = () => {
    mp.track("Twitter Card Trigger", { handle, date, url });
  };

  return (
    <Link href={url} target="_blank" _hover={{ textDecoration: "none" }}>
      <Box
        padding="4"
        my="2"
        borderRadius="10px"
        shadow="md"
        transition="0.2s all"
        _hover={{
          backgroundColor: useColorModeValue("blackAlpha.100", "whiteAlpha.100")
        }}
        onClick={trackMetric}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px="2"
        >
          <Icon
            as={ImQuotesLeft}
            w={6}
            h={6}
            mb="4"
            opacity="0.30"
            color={useColorModeValue("blue.500", "blue.200")}
          />
          <Icon as={FaTwitter} w={4} h={4} mb="4" color="twitter.500" />
        </Box>
        <HStack alignItems="flex-start">
          <Avatar src={image} size="sm" my="1" />
          <Box>
            <HStack spacing="1" mb="2" flexWrap="wrap">
              <Text fontWeight="medium" {...tweetMetaProps}>
                {name}
              </Text>
              <Text color="gray" {...tweetMetaProps}>
                {handle}
              </Text>
              <Text color="gray" {...tweetMetaProps}>
                •
              </Text>
              <Text color="gray" {...tweetMetaProps}>
                {date}
              </Text>
            </HStack>
            <Text {...tweetContentProps}>{content}</Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  );
};

export default TweetCard;
