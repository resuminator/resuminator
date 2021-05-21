import { Box } from "@chakra-ui/layout";
import React from "react";
import {
  DragDropContext,
  DragDropContextProps,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

interface Props {
  droppableId: string;
}

export const handleDragEnd = <T,>(
  result: DropResult,
  data: Array<T>,
  setData: (data: Array<T>) => void
): void => {
  const { destination, source } = result;
  if (!destination) return;
  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  )
    return;

  const items = [...data];
  const [reorderedItem] = items.splice(source.index, 1);
  items.splice(destination.index, 0, reorderedItem);
  setData(items);
};

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
