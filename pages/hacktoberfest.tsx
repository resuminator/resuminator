import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";
import HacktoberfestSEO from "../website/Hacktoberfest/HacktoberfestSEO";
import HfHero from "../website/Hacktoberfest/HfHero";
import { HFColors } from "../website/Hacktoberfest/hf_colors";
import Nav from "../website/Nav";

interface Props {}

const HF_BG = {
  light: "/web/hf_22_bg_light.png",
  dark: "/web/hf_22_bg.png"
};

const Hacktoberfest = (props: Props) => {
  return (
    <>
      <HacktoberfestSEO />
      <Box
        backgroundColor={HFColors.bg.primary}
        width="100%"
        minH="100vh"
        backgroundImage={useColorModeValue(
          `url(${HF_BG.light})`,
          `url(${HF_BG.dark})`
        )}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <Nav />
        <HfHero />
      </Box>
    </>
  );
};

export default Hacktoberfest;
