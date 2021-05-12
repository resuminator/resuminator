import { Button } from "@chakra-ui/button";
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
  expandHandler?: IHandler;
  visibilityHandler?: IHandler;
  isHidden?: boolean;
  editor?: Editor;
}

const ExpandableCard: React.FC<Props & BoxProps> = ({
  title,
  subtitle,
  expandHandler = { value: false, setValue: (value) => value },
  visibilityHandler = { value: false, setValue: (value) => value },
  editor,
  children,
  ...props
}) => {
  return expandHandler.value ? (
    <Box p="4" mb="2" border="1px solid" borderRadius="10px">
      {children}
      <Box borderRadius="md" my="4">
        <HStack>
          <Button
            size="sm"
            leftIcon={<FaChevronUp />}
            aria-label="Hide-Item-From-Resume"
            onClick={expandHandler.setValue}
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
      onClick={expandHandler.setValue}
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
