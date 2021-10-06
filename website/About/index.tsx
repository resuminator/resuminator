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

import { Text } from "@chakra-ui/react";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";

const Description: React.FC = ({ children }) => (
  <Text mb="8" fontSize={{ base: "lg", lg: "xl", xl: "2xl" }}>
    {children}
  </Text>
);

const AboutUs = () => {
  return (
    <SectionLayout
      p={{
        base: "8",
        md: "8rem 8rem 0 8rem",
        lg: "10rem 8rem 0 8rem",
        xl: "12rem 14rem 0px 14rem"
      }}
    >
      <HeadingBox
        title="Power to all"
        subtitle="The reason why it all began"
        alignItems="flex-start"
        titleProps={{ fontSize: { base: "5xl", md: "6xl", xl: "7xl" } }}
        subtitleProps={{ fontSize: { base: "xl", lg: "2xl", xl: "3xl" } }}
        py={{ base: "8" }}
        textAlign="left"
      />
      <Description>
        Resuminator was an idea which was incepted during the legendary lockdown
        of 2020. It was born out of an itch for better user-experience while
        creating resumes with cumbersome tools like LaTeX editors.
      </Description>
      <Description>
        The first public release of Resuminator was in January, 2021. Even
        though it was a simple version with just one resume support and very
        restrictive layouts and design controls, people gathered around to use
        and we thought there might be some potential to this project.
      </Description>
      <Description>
        The next few months were exciting and we talked to our community (others
        read it as users), and we thought to write it all from scratch keeping
        the part people loved, and adding the ones they always wanted from their
        resume service. And finally we came up with a radical change in design
        which you see today.
      </Description>
    </SectionLayout>
  );
};

export default AboutUs;
