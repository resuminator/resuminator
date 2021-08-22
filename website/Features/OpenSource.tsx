import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

interface Props {}

const OpenSource = (props: Props) => {
  return (
    <Box
      px="8"
      py="16"
      bgColor={useColorModeValue("blackAlpha.900", "blackAlpha.500")}
      minH="100vh"
    >
      <Box mb="4">
        <Text
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          letterSpacing={-2}
          mb="1"
          lineHeight="short"
          color={useColorModeValue("teal.200", "teal.400")}
        >
          Proudly Community Driven
        </Text>
        <Text
          fontWeight="medium"
          fontSize="2xl"
          letterSpacing="tight"
          color="teal.500"
        >
          Backed by open-source.
        </Text>
      </Box>
      <Text fontSize="lg" lineHeight="tall" color="teal.200">
        Cupcake ipsum dolor sit amet soufflé pastry jujubes lollipop. Muffin
        jelly beans jelly pastry brownie pudding jujubes jelly beans carrot
        cake. Jujubes jujubes I love candy I love toffee toffee jelly beans.
        Lollipop donut chupa chups I love danish chocolate. Pie jujubes
        chocolate bar pie toffee chocolate. Carrot cake powder jelly beans
        dragée soufflé marshmallow muffin jelly icing. Cotton candy pastry sugar
        plum pastry sweet roll liquorice candy. Chocolate bar sugar plum bonbon
        powder toffee I love sesame snaps halvah topping. Dessert halvah sugar
        plum powder powder powder sugar plum sweet cookie. Icing powder I love
        muffin candy. Pie I love danish I love caramels donut sweet roll. I love
        wafer I love cupcake tootsie roll lemon drops marshmallow topping.
      </Text>
    </Box>
  );
};

export default OpenSource;
