import { Box } from "@chakra-ui/layout";
import React from "react";
import {
  DragDropContext,
  DragDropContextProps,
  Droppable,
} from "react-beautiful-dnd";

interface Props {
  droppableId: string;
}

const DndWrapper: React.FC<Props & DragDropContextProps> = ({
  droppableId,
  children,
  ...props
}) => {
  return (
    <DragDropContext {...props}>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <Box {...provided.droppableProps} ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DndWrapper;
