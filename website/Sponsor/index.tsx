import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaHeart, FaPizzaSlice } from "react-icons/fa";
import { BUY_ME_A_COFFEE } from "../../data/RefLinks";

const Sponsor = () => {
  return (
    <Box px="8" py="16">
      <HStack lineHeight="short">
        <Heading
          fontSize="4xl"
          fontWeight="bold"
          letterSpacing="tighter"
          mb="4"
        >
          Sponsor this project
          <Icon as={FaHeart} color="red" fontSize="3xl" mx="2" />
        </Heading>
      </HStack>
      <Text fontSize="xl" fontWeight="medium" letterSpacing="tight" mb="8">
        Your support will help this project impact the lives of thousands of job
        seekers
      </Text>
      <Text mb="8">
        Resuminator is a free and open source project built and maintained by a
        duo from India, and is backed by our community and contributors. You can
        support the development of this project if you believe this project
        added value to your life or could potentially add value to the lives of
        others.
      </Text>
      <ButtonGroup>
        {/* <Button leftIcon={<FaHeart />} colorScheme="purple">
          Become a supporter
        </Button> */}
        <Button
          as="a"
          href={BUY_ME_A_COFFEE}
          target="_blank"
          leftIcon={<FaPizzaSlice />}
          colorScheme="purple"
        >
          Buy us a pizza
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default Sponsor;
