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

import { IconButton, IconButtonProps } from "@chakra-ui/button";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";

interface Props {
  label?: string;
}

//Unsure if this is the right fix to 'Function components cannot be given refs'
const TooltipIconButton: React.FC<Props & IconButtonProps> = React.forwardRef(
  ({ label, ...props }, ref) => {
    return (
      <Tooltip label={label}>
        <IconButton size="sm" variant="ghost" {...props} />
      </Tooltip>
    );
  }
);

TooltipIconButton.displayName = "TooltipIconButton";

export default TooltipIconButton;
