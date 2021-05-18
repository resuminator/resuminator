import { HStack } from "@chakra-ui/layout";
import React from "react";
import { FiEye, FiEyeOff, FiHelpCircle } from "react-icons/fi";
import TooltipIconButton from "../../components/common/TooltipIconButton";

export interface SectionProperties {
  isHidden?: boolean;
}

interface Props {
  handler: {
    isDisabled: boolean;
    toggleDisabled: () => void;
  };
}

const SectionControls: React.FC<Props> = ({ handler, children }) => {
  const { isDisabled, toggleDisabled } = handler;
  return (
    <HStack mb="4" spacing="4">
      {children}
      <TooltipIconButton
        aria-label="Toggle Visibility"
        label="Toggle Visibility"
        icon={isDisabled ? <FiEyeOff /> : <FiEye />}
        onClick={toggleDisabled}
        colorScheme={isDisabled ? "red" : ""}
      />
      <TooltipIconButton
        aria-label="Know More"
        label="Know More"
        icon={<FiHelpCircle />}
      />
    </HStack>
  );
};

export default SectionControls;
