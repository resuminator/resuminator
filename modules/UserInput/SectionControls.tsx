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
        body: "We don't seem to have any tips on improving this section",
      },
    ],
  },
  hasHintsHidden = false,
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
