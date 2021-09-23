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
  SimpleGrid,
  HStack,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { chunk } from "@chakra-ui/utils";
import { getUniqueID } from "../../utils";
import HeadingBox from "../common/HeadingBox";
import SectionLayout from "../common/SectionLayout";
import TweetCard from "./TweetCard";
import tweets from "./tweets";

const Testimonials = () => {
  const ROWS = useBreakpointValue({ base: 1, md: 2, lg: 3 }) || 1;
  const CHUNK_SIZE = Math.floor(tweets.length / ROWS);

  return (
    <SectionLayout
      aria-label="Testimonials"
      pb={{ base: "8", sm: "16", lg: "24", xl: "36" }}
    >
      <HeadingBox
        title="What's buzzing?"
        titleProps={{ color: "twitter.500" }}
        subtitle="Hear our whispers across the internet"
        subtitleProps={{
          fontSize: { base: "lg", sm: "xl", md: "2xl", lg: "3xl" },
        }}
      />
      <SimpleGrid
        templateColumns={{
          base: "repeat(1, minmax(0, 1fr))",
          md: "repeat(2, minmax(0, 1fr))",
          lg: "repeat(3, minmax(0, 1fr))",
        }}
        gridColumnGap={{ md: "4" }}
      >
        {chunk(tweets, CHUNK_SIZE).map((tweetList, index) => (
          <Stack
            key={getUniqueID()}
            aria-label={`Tweet-Row-${index}`}
            spacing="2"
          >
            {tweetList.map((tweet) => (
              <TweetCard key={tweet.handle} {...tweet} />
            ))}
          </Stack>
        ))}
      </SimpleGrid>
    </SectionLayout>
  );
};

export default Testimonials;
