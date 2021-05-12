import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, BoxProps, HStack, Text } from "@chakra-ui/layout";
import { Editor } from "@tiptap/react";
import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import TooltipIconButton from "../../components/common/TooltipIconButton";

type IHandler = { value: boolean; setValue: (value) => void };

interface Props {
  title: string;
  subtitle?: string;
  visibilityHandler?: IHandler;
  isHidden?: boolean;
  editor?: Editor;
  chainOnClick?: () => void;
}

const ExpandableCard: React.FC<Props & BoxProps> = ({
  title,
  subtitle,
  visibilityHandler = { value: false, setValue: (value) => value },
  editor,
  chainOnClick,
  children,
  ...props
}) => {
  const {isOpen, onToggle} = useDisclosure();
  return isOpen ? (
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
            label={visibilityHandler.value ? "Show on resume" : "Hide from resume"}
            aria-label="Hide-Item-From-Resume"
            onClick={visibilityHandler.setValue}
            icon={visibilityHandler.value ? <FiEyeOff /> : <FiEye />}
            colorScheme={visibilityHandler.value ? "red": "inherit"}
          />
        </HStack>
      </Box>
    </Box>
  ) : (
    <Box
      p="5"
      mb="2"
      border="1px solid"
      borderRadius="10px"
      shadow="md"
      cursor="pointer"
      _hover={{ bg: "whiteAlpha.100" }}
      transition="all 0.2s"
      onClick={() => {onToggle(); chainOnClick()}}
      {...props}
    >
      <Text>{title}</Text>
      <Text fontSize="sm" color="GrayText">
        {subtitle}
      </Text>
    </Box>
  );
};

export default ExpandableCard;
