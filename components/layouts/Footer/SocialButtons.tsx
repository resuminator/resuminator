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

import { ButtonGroup, IconButton } from "@chakra-ui/button";
import { Divider } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import { SocialDataObject } from "../../../data/SocialLinks";

interface Props {
  data: Array<SocialDataObject>;
}

const SocialButtons: React.FC<Props> = ({ data }) => {
  return (
    <ButtonGroup>
      {data.map((item, index) => (
        <Fragment key={item.ariaLabel}>
          <IconButton
            variant="ghost"
            aria-label={item.ariaLabel}
            icon={<item.icon />}
            isRound
            color="whiteAlpha.900"
            colorScheme="inherit"
            as="a"
            href={item.link}
            target="_blank"
          />
        </Fragment>
      ))}
    </ButtonGroup>
  );
};

export default SocialButtons;
