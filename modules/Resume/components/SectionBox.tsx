import { Box, BoxProps } from "@chakra-ui/layout";
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

  return (
    <Draggable key={draggableId} draggableId={draggableId} index={index}>
      {(provided) => (
        <Box
          w="inherit"
          {...props}
          mb={spacing * 2}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {children}
        </Box>
      )}
    </Draggable>
  );
};

export default SectionBox;
