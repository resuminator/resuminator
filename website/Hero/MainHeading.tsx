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

import { Heading, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import HeadingGradient from "./HeadingGradient";

const MainHeading = () => {
  const { colorMode } = useColorMode();

  const LightHeading = () => (
    <>
      Beautiful <HeadingGradient>single-page resumes</HeadingGradient>within
      minutes.
    </>
  );

  const DarkHeading = () => (
    <HeadingGradient>
      Beautiful single-page resumes within minutes.
    </HeadingGradient>
  );

  return (
    <Heading
      fontWeight="800"
      fontSize={{ base: "4xl", sm: "5xl", lg: "6xl", xl: "7xl" }}
      textAlign="center"
      letterSpacing={useBreakpointValue({ base: -3, lg: -4, xl: -4.5 })}
      color="#000051"
      mb="8"
      maxW={{ xl: "80%" }}
      lineHeight={{ base: "short", md: "shorter" }}
    >
      {colorMode === "light" ? <LightHeading /> : <DarkHeading />}
    </Heading>
  );
};

export default MainHeading;
