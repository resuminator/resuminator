import { Image } from "@chakra-ui/image";
import { Center, Stack, Text } from "@chakra-ui/layout";
import { useBreakpointValue } from "@chakra-ui/media-query";
import React from "react";
import { LogoWithText } from "../../components/layouts/Logos";

interface Props {}

const HfHero = (props: Props) => {
  return (
    <Center minHeight="100vh" flexDir="column">
      <Stack
        alignItems="center"
        isInline={useBreakpointValue({ base: false, md: true })}
      >
        <Image
          src="/web/hf_logo_light.svg"
          boxSize={{ base: "16rem", md: "18rem", xl: "20rem" }}
          height="8rem"
        />
        <Text
          fontWeight="bold"
          fontSize={{ base: "4xl", xl: "5xl" }}
          position="relative"
          right={{ md: "1rem" }}
          bottom={{ base: "1rem", md: 0 }}
          color="#F74700"
        >
          +
        </Text>
        <LogoWithText
          width={{ base: "160px", md: "240px", xl: "400px" }}
          height={{ base: "32px", md: "48px", xl: "80px" }}
        />
      </Stack>
      <Text fontWeight="semibold" fontSize={{ base: "xl", xl: "2xl" }}>
        1st October 2021 to 31st October 2021
      </Text>
    </Center>
  );
};

export default HfHero;
