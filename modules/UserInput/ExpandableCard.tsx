import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, BoxProps, HStack, Text } from "@chakra-ui/layout";
import { Collapse } from "@chakra-ui/transition";
import React, { Fragment } from "react";
import { FaChevronUp } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import TooltipIconButton from "../../components/common/TooltipIconButton";
import RemoveItemButton from "./RemoveItem";

type IHandler = { value: boolean; setValue: () => void };

interface Props {
  title: string;
  subtitle?: string;
  visibilityHandler?: IHandler;
  deleteHandler: () => void;
}

const ExpandableCard: React.FC<Props & BoxProps> = ({
  title,
  subtitle,
  visibilityHandler = { value: false },
  deleteHandler,
  children,
  ...props
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Fragment>
      {!isOpen ? (
        <Box
          p="5"
          mb="2"
          border="1px solid"
          borderRadius="10px"
          shadow="md"
          cursor="pointer"
          _hover={{ bg: "whiteAlpha.100" }}
          onClick={onToggle}
          {...props}
        >
          <Text>{title}</Text>
          <Text fontSize="sm" color="GrayText">
            {subtitle}
          </Text>
        </Box>
      ) : null}
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
                  visibilityHandler.value
                    ? "Show on resume"
                    : "Hide from resume"
                }
                aria-label="Hide-Item-From-Resume"
                onClick={visibilityHandler.setValue}
                icon={visibilityHandler.value ? <FiEyeOff /> : <FiEye />}
                colorScheme={visibilityHandler.value ? "red" : "inherit"}
              />
              <RemoveItemButton
                itemType="experience"
                handleDelete={deleteHandler}
              />
            </HStack>
          </Box>
        </Box>
      </Collapse>
    </Fragment>
  );
};

export default ExpandableCard;
