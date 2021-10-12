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

import { Box, BoxProps } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import useResumeStore from "../../../store/resume.store";

export interface SectionBoxProps {
  draggableId?: string;
  index?: number;
}

const SectionBox: React.FC<BoxProps & SectionBoxProps> = ({
  children,
  draggableId,
  index,
  ...props
}) => {
  const spacing = useResumeStore((state) => state.spacing);
  const lightModeProps: BoxProps = {
    bg: "white"
  };
  const darkModeProps: BoxProps = {
    bg: "gray.800"
  };
  const draggingLight: BoxProps = {
    bg: "white",
    border: "2px solid",
    borderColor: "blue.500",
    shadow: "lg"
  };
  const draggingDark: BoxProps = {
    bg: "gray.800",
    border: "2px solid",
    borderColor: "blue.500",
    shadow: "lg"
  };
  const cardProps = useColorModeValue(lightModeProps, darkModeProps);
  const draggingProps = useColorModeValue(draggingLight, draggingDark);

  const hoverPropsLight: BoxProps = {
    bg: "gray.100"
  };

  const hoverPropsDark: BoxProps = {
    bg: "whiteAlpha.100"
  };

  const hoverProps = useColorModeValue(hoverPropsLight, hoverPropsDark);

  return (
    <Draggable key={draggableId} draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
        <Box
          {...props}
          w="inherit"
          p="1"
          pb="0"
          mb={spacing * 1}
          borderRadius="10px"
          _hover={hoverProps}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          {...(snapshot.isDragging ? draggingProps : cardProps)}
        >
          {children}
        </Box>
      )}
    </Draggable>
  );
};

export default SectionBox;
