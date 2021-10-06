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

import { Box, SimpleGrid, Stack, useColorModeValue } from "@chakra-ui/react";
import Branding from "./Branding";
import Product from "./Product";
import Support from "./Support";

const Footer = () => {
  return (
    <Box
      px={{ base: "1rem", md: "4rem", lg: "7rem" }}
      backgroundColor={useColorModeValue("darkblue", "gray.900")}
    >
      <Stack maxW="6xl" py="10">
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr 1fr",
            lg: "4fr 1fr 1fr"
          }}
          spacing={8}
        >
          <Branding />
          <Product />
          <Support />
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Footer;
