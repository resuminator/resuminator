import { useColorMode } from "@chakra-ui/color-mode";
import { HStack, Text } from "@chakra-ui/layout";
import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import useGlobalStore from "../../../store/global.store";

interface Props {}

const ColorModeWarning = (props: Props) => {
  const grayscaleFilter = useGlobalStore((state) => state.grayscaleFilter);
  const { colorMode } = useColorMode();

  return (
    colorMode === "dark" &&
    grayscaleFilter && (
      <HStack mb="2" color="yellow">
        <FiAlertTriangle />
        <Text fontSize="sm">Use light mode for an accurate preview</Text>
      </HStack>
    )
  );
};

export default ColorModeWarning;
