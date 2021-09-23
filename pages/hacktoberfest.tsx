import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";
import HfHero from "../website/Hacktoberfest/HfHero";
import Nav from "../website/Nav";

interface Props {}

const Hacktoberfest = (props: Props) => {
  return (
    <Box
      backgroundColor="#FFEDD5"
      width="100%"
      minH="100vh"
      backgroundImage={useColorModeValue(
        "url(/web/hf_light.png)",
        "url(/web/hf_dark.png)"
      )}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Nav />
      <HfHero/>
    </Box>
  );
};

export default Hacktoberfest;
