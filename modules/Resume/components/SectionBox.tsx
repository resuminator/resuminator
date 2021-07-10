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
    bg: "white",
  };
  const darkModeProps: BoxProps = {
    bg: "gray.800",
  };
  const draggingLight: BoxProps = {
    bg: "white",
    border: "2px solid",
    borderColor: "blue.500",
  };
  const draggingDark: BoxProps = {
    bg: "gray.800",
    border: "2px solid",
    borderColor: "blue.500",
  };
  const cardProps = useColorModeValue(lightModeProps, darkModeProps);
  const draggingProps = useColorModeValue(draggingLight, draggingDark);

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
