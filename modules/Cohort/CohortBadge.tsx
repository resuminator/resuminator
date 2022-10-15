/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2022  Resuminator Authors

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

import { Badge } from "@chakra-ui/react";
import React from "react";
import { CohortProps } from "./types";

interface Props {}

const CohortBadge = (props: Props) => {
  // This will come from the store
  const cohortData: CohortProps = {
    cohort: "Pro",
    color: "purple"
  };
  
  return (
    <Badge
      borderRadius={"md"}
      colorScheme={cohortData.color}
      textTransform="none"
    >
      {cohortData.cohort}
    </Badge>
  );
};

export default CohortBadge;
