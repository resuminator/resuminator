import { HStack } from "@chakra-ui/layout";
import React from "react";
import { FiEye, FiEyeOff, FiHelpCircle } from "react-icons/fi";
import TooltipIconButton from "../../components/common/TooltipIconButton";

export interface SectionProperties {
  isHidden?: boolean;
}

interface Props {
  handler: {
    properties: SectionProperties;
    setProperties: React.Dispatch<React.SetStateAction<SectionProperties>>;
  };
}

const SectionControls: React.FC<Props> = ({ handler, children }) => {
  const { properties, setProperties } = handler;
  return (
    <HStack mb="4" spacing="4">
      {children}
      <TooltipIconButton
        aria-label="Toggle Visibility"
        label="Toggle Visibility"
        icon={properties.isHidden ? <FiEyeOff /> : <FiEye />}
        onClick={() =>
          setProperties({ ...properties, isHidden: !properties.isHidden })
        }
        colorScheme={properties.isHidden ? "red" : ""}
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
