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
  isOpen: false,
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
      <InputCard {...InputCardProps}>
        {children}
      </InputCard>
    </DisclosureContext.Provider>
  );
};

export default ExpandableCard;
