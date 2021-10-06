/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import Icon from "@chakra-ui/icon";
import { Box, Text } from "@chakra-ui/layout";
import {
  BoxProps,
  TextProps,
  useColorModeValue,
  VStack
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { GrDrag } from "react-icons/gr";
import { DisclosureContext } from "./ExpandableCard";

export interface DisplayCardProps {
  index: number;
  draggableId: string;
  title: string;
  subtitle?: string;
  titlePlaceholder?: string;
  isHidden?: boolean;
}

const DisplayCard: React.FC<DisplayCardProps> = ({
  draggableId,
  index,
  title,
  subtitle,
  titlePlaceholder,
  isHidden,
  ...props
}) => {
  const { onToggle } = useContext(DisclosureContext);

  const lightProps: BoxProps = {
    shadow: isHidden ? "none" : "md",
    bg: isHidden ? "gray.100" : "white",
    _hover: {
      bg: isHidden ? "gray.200" : "gray.100"
    }
  };

  const darkProps: BoxProps = {
    shadow: isHidden ? "none" : "2xl",
    bg: isHidden ? "whiteAlpha.100" : "gray.800",
    _hover: { bg: isHidden ? "whiteAlpha.200" : "whiteAlpha.100" }
  };

  const textLight: TextProps = {
    color: isHidden ? "gray.500" : "gray.800"
  };

  const textDark: TextProps = {
    color: isHidden ? "gray.600" : "inherit"
  };

  const rest = useColorModeValue(lightProps, darkProps);
  const textProps = useColorModeValue(textLight, textDark);

  return (
    <Draggable key={draggableId} draggableId={draggableId} index={index}>
      {(provided) => (
        <Box
          key={draggableId}
          ref={provided.innerRef}
          {...provided.draggableProps}
          p="5"
          mb="2"
          borderRadius="10px"
          cursor="pointer"
          display="flex"
          justifyContent="space-between"
          onClick={onToggle}
          {...rest}
          {...props}
        >
          <VStack alignItems="flex-start" spacing="1">
            <Text fontWeight="semibold" {...textProps}>
              {title || titlePlaceholder}
            </Text>
            <Text fontSize="sm" color="GrayText">
              {subtitle || "Click on this card to expand and start editing"}
            </Text>
          </VStack>
          <Box
            transition="all 0.2s"
            opacity="0.2"
            _hover={{ opacity: "0.8" }}
            {...provided.dragHandleProps}
          >
            <Icon as={GrDrag} mt="1.5" />
          </Box>
        </Box>
      )}
    </Draggable>
  );
};

export default DisplayCard;
