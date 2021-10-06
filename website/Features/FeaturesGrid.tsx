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
  AspectRatio,
  Box,
  SimpleGrid,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";
import { FeatureDetails } from "./features.data";

const FeatureBox = ({ title, description, graphic, color }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.9
    };

    const handlePlay = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlay, options);

    observer.observe(videoRef.current);
  }, []);

  return (
    <Box
      py={{ base: "8" }}
      display={{ md: "flex" }}
      alignItems="center"
      minH={{ base: "50vh", md: "60vh", lg: "80vh", xl: "90vh" }}
    >
      <Box
        flexBasis={{ md: "40%" }}
        pb={{ base: "8" }}
        pr={{ md: "4", lg: "8" }}
      >
        <Text
          as="h2"
          fontWeight="bold"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl", xl: "5xl" }}
          letterSpacing="tighter"
          mb="4"
          color={useColorModeValue(color[0], color[1])}
        >
          {title}
        </Text>
        <Text
          fontSize={{ base: "sm", sm: "md", lg: "lg", xl: "xl" }}
          fontWeight={{ sm: "medium", md: "normal" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          {description}
        </Text>
      </Box>
      <AspectRatio maxW="1080px" ratio={16 / 9} flexBasis={{ md: "60%" }}>
        <video
          style={{ borderRadius: "10px" }}
          ref={videoRef}
          src={useColorModeValue(graphic[0], graphic[1])}
          loop
          muted
        ></video>
      </AspectRatio>
    </Box>
  );
};

const FeaturesGrid = () => {
  return (
    <SectionLayout pt="0" aria-label="Features 2x2">
      <HeadingBox
        title="How we do this?"
        subtitle="What makes Resuminator land this sweet spot between customization and ease"
        subtitleProps={{ fontSize: { base: "xl", lg: "2xl" } }}
      />
      <SimpleGrid templateColumns={{ base: "1fr", md: "1fr" }}>
        {FeatureDetails.map((feat) => (
          <FeatureBox key={feat.title} {...feat} />
        ))}
      </SimpleGrid>
    </SectionLayout>
  );
};

export default FeaturesGrid;
