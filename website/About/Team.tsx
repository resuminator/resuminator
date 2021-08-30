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

import { SimpleGrid } from "@chakra-ui/react";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";
import { teamDetails } from "./teamDetails";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <SectionLayout
      id="team"
      p={{
        base: "1rem 2rem 2rem 2rem",
        md: "4rem 8rem 8rem 8rem",
        lg: "4rem 8rem 8rem 8rem",
        xl: "8rem 14rem 8rem 14rem",
      }}
    >
      <HeadingBox
        title="Team"
        subtitle="The people that power this product for thousands of people who love it."
        alignItems="flex-start"
        titleProps={{ fontSize: { base: "5xl", md: "6xl", xl: "7xl" } }}
        subtitleProps={{
          fontSize: { base: "xl", lg: "xl", xl: "2xl" },
          maxW: "100%",
          pl: "0.5rem",
        }}
        py={{ base: "8" }}
        textAlign="left"
      />
      <SimpleGrid templateColumns={{ base: "1fr", lg: "1fr 1fr" }}>
        {teamDetails.map((member) => (
          <TeamCard key={member.fullName} {...member} />
        ))}
      </SimpleGrid>
    </SectionLayout>
  );
};

export default Team;
