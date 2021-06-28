import { HStack } from "@chakra-ui/layout";
import React, { ReactElement } from "react";
import { FiEye, FiEyeOff, FiHelpCircle } from "react-icons/fi";
import TooltipIconButton from "../../components/common/TooltipIconButton";
import { useDisabled } from "../../hooks/useDisabled";
import { Sections } from "../../store/types";
import { CustomSectionObject } from "./Custom/types";

export interface SectionProperties {
  isHidden?: boolean;
}

interface Props {
  layoutKey?: Sections | CustomSectionObject["header"];
  hasToggleButton?: boolean;
  extraChildren?: ReactElement;
}

const SectionControls: React.FC<Props> = ({
  layoutKey,
  hasToggleButton = true,
  children,
  extraChildren,
}) => {
  const { isDisabled, toggleDisabled } = useDisabled(layoutKey);
  return (
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
      <TooltipIconButton
        aria-label="Know More"
        label="Know More"
        icon={<FiHelpCircle />}
      />
      {extraChildren}
    </HStack>
  );
};

export default SectionControls;
