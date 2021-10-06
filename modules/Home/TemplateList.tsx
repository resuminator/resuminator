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

import { GridItem } from "@chakra-ui/react";
import React from "react";
import BoxHeader from "../../components/common/BoxHeader";

const TemplateList = () => {
  return (
    <GridItem colSpan={3}>
      <BoxHeader
        title="Start with a template"
        subtitle="Select from a template below. Click on &ldquo;Show all&rdquo; to
            open template gallery"
        size={{ title: "4xl", subtitle: "md" }}
        titleProps={{
          as: "h1",
          letterSpacing: "tight",
          color: "InactiveCaptionText"
        }}
        spacing="0"
      />
      {/* <Text color="gray" fontWeight="normal" fontSize="xl">
        Coming Soon
      </Text> */}
    </GridItem>
  );
};

export default TemplateList;
