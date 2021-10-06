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

import { useDisclosure } from "@chakra-ui/hooks";
import { BoxProps } from "@chakra-ui/layout";
import React, { createContext } from "react";
import DisplayCard, { DisplayCardProps } from "./DisplayCard";
import InputCard, { InputCardProps } from "./InputCard";

interface Props {
  DisplayCardProps: DisplayCardProps;
  InputCardProps: InputCardProps;
}

export interface DisclosureContextProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

export const DisclosureContext = createContext<DisclosureContextProps>({
  isOpen: false
});

const ExpandableCard: React.FC<Props & BoxProps> = ({
  DisplayCardProps,
  InputCardProps,
  children,
  ...props
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <DisclosureContext.Provider value={{ isOpen, onToggle }}>
      {!isOpen ? <DisplayCard {...DisplayCardProps} {...props} /> : null}
      <InputCard {...InputCardProps}>{children}</InputCard>
    </DisclosureContext.Provider>
  );
};

export default ExpandableCard;
