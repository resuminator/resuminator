import { Button } from "@chakra-ui/button";
import { Box, HStack } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import React, { useContext } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import RemoveItemButton from "../../common/RemoveItem";
import TooltipIconButton from "../../common/TooltipIconButton";
import { DisclosureContext } from "./ExpandableCard";

type IHandler = { value: boolean; setValue: () => void };

export interface InputCardProps {
  itemType?: string;
  visibilityHandler?: IHandler;
  deleteHandler: () => void;
}

const InputCard: React.FC<InputCardProps> = ({
  children,
  visibilityHandler = { value: false },
  itemType,
  deleteHandler,
}) => {
  const { isOpen, onToggle } = useContext(DisclosureContext);

  return (
    <Collapse in={isOpen} animateOpacity unmountOnExit>
      <Box p="4" mb="2" border="1px solid" borderRadius="10px">
        {children}
        <Box borderRadius="md" my="4">
          <HStack>
            <Button
              size="sm"
              leftIcon={<FaChevronUp />}
              aria-label="Hide-Item-From-Resume"
              onClick={onToggle}
            >
              Collapse
            </Button>
            <TooltipIconButton
              label={
                visibilityHandler.value ? "Show on resume" : "Hide from resume"
              }
              aria-label="Hide-Item-From-Resume"
              onClick={visibilityHandler.setValue}
              icon={visibilityHandler.value ? <FiEyeOff /> : <FiEye />}
              colorScheme={visibilityHandler.value ? "red" : "inherit"}
            />
            <RemoveItemButton
              itemType={itemType}
              handleDelete={deleteHandler}
            />
          </HStack>
        </Box>
      </Box>
    </Collapse>
  );
};

export default InputCard;
