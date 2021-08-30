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

import { Grid } from "@chakra-ui/react";
import React from "react";

const SettingsLayoutGrid: React.FC = ({ children }) => {
  return (
    <Grid
      minHeight="100vh"
      templateRows="0.5fr repeat(4, 2fr)" //6 rows, 1
      templateColumns="1fr 2fr 1fr" //4 columns, 1
      gap={4}
      mx={{ md: "4rem", lg: "7rem" }}
      my={{ base: "2rem" }}
    >
      {children}
    </Grid>
  );
};

export default SettingsLayoutGrid;
