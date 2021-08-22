import {
  HStack,
  Input,
  Text,
  useColorModeValue,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { FiSend } from "react-icons/fi";
import LinkText from "../../components/common/LinkText";
import ListHeader from "./ListHeader";

const Newsletter = () => {
  return (
    <Stack
    align="flex-start"
    gridColumnStart={{ base: "1", lg: "4" }}
    gridColumnEnd={{ base: "1", md: "3", lg: "5" }}
  >
      <ListHeader>Subscribe to Broadmap</ListHeader>
      <Text fontSize="sm" color="blue.100" mb="2">
        A broadmap is a collection of handpicked resources sent as a newsletter
        every Monday.{" "}
        <LinkText href="#" color="blue.400">
          Know More
        </LinkText>
      </Text>
      <HStack>
        <Input
          placeholder={"Your email address"}
          color="whiteAlpha.900"
          bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
          border={0}
          _focus={{
            bg: "whiteAlpha.300",
          }}
        />
        <IconButton
          colorScheme="blue"
          aria-label="Subscribe"
          icon={<FiSend />}
        />
      </HStack>
    </Stack>
  );
};

export default Newsletter;
