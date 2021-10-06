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

import { HStack } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { ReactElement } from "react";
import { FiEye, FiEyeOff, FiHelpCircle } from "react-icons/fi";
import TooltipIconButton from "../../components/common/TooltipIconButton";
import { SectionHints } from "../../data/Hints/types";
import { useDisabled } from "../../hooks/useDisabled";
import { Sections } from "../../store/types";
import { CustomSectionObject } from "./Custom/types";
const HintsModal = dynamic(() => import("./HintsModal"));

export interface SectionProperties {
  isHidden?: boolean;
}

interface Props {
  layoutKey?: Sections | CustomSectionObject["header"];
  hasToggleButton?: boolean;
  extraChildren?: ReactElement;
  hintData?: SectionHints;
  hasHintsHidden?: boolean;
}

const SectionControls: React.FC<Props> = ({
  layoutKey,
  hasToggleButton = true,
  children,
  extraChildren,
  hintData = {
    title: "Improvement Hints",
    content: [
      {
        type: "p",
        body: "We don't seem to have any tips on improving this section"
      }
    ]
  },
  hasHintsHidden = false
}) => {
  const { isDisabled, toggleDisabled } = useDisabled(layoutKey);
  const { isOpen, onClose, onToggle } = useDisclosure();
  return (
    <>
      <HStack mb="4" spacing="4">
        {children}
        {hasToggleButton && (
          <TooltipIconButton
            aria-label="Toggle Visibility"
            label="Toggle Visibility"
            icon={isDisabled ? <FiEyeOff /> : <FiEye />}
            onClick={toggleDisabled}
            colorScheme={isDisabled ? "red" : ""}
          />
        )}
        {!hasHintsHidden && (
          <TooltipIconButton
            aria-label="Know More"
            label="Know More"
            icon={<FiHelpCircle />}
            onClick={onToggle}
          />
        )}
        {extraChildren}
      </HStack>
      <HintsModal isOpen={isOpen} onClose={onClose} hintsData={hintData} />
    </>
  );
};

export default SectionControls;
