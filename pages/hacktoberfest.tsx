import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import React from "react";
import HacktoberfestSEO from "../website/Hacktoberfest/HacktoberfestSEO";
import HfHero from "../website/Hacktoberfest/HfHero";
import { HFColors } from "../website/Hacktoberfest/hf_colors";
import Nav from "../website/Nav";

interface Props {}

const HF_BG = {
  light:
    "https://user-images.githubusercontent.com/30192068/134772360-e45e99e9-f7f5-483c-bdb0-474de4b919df.png",
  dark: "https://user-images.githubusercontent.com/30192068/134772359-22ecf056-5859-4ac3-9f9f-b26ae4a86bb0.png"
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
