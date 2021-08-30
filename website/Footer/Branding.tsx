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

import { Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import Copyright from "../../components/layouts/Footer/Copyright";
import SocialButtons from "../../components/layouts/Footer/SocialButtons";
import { LogoWithText } from "../../components/layouts/Logos";
import SocialLinks from "../../data/SocialLinks";

const Branding = () => {
  return (
    <Stack spacing="4" alignItems="flex-start">
      <LogoWithText
        mb="0"
        variant="light"
        width={useBreakpointValue({ base: "128px", md: "160px" })}
        height={useBreakpointValue({ base: "25.6px", md: "32px" })}
      />
      <Copyright />
      <SocialButtons data={SocialLinks} />
    </Stack>
  );
};

export default Branding;
