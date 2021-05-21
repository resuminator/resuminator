import { Box } from "@chakra-ui/layout";
import React from "react";
import {
  DragDropContext,
  Droppable,
  DragDropContextProps,
  resetServerContext,
} from "react-beautiful-dnd";

interface Props {
  id: string;
}

const DndWrapper: React.FC<Props & DragDropContextProps> = ({
  id,
  children,
  ...props
}) => {

  resetServerContext();
  return (
    <DragDropContext {...props}>
      <Droppable droppableId={id}>
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
