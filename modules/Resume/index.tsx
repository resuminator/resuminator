import { Box } from "@chakra-ui/layout";
import { BoxProps, useColorModeValue } from "@chakra-ui/react";
import produce from "immer";
import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import ColoredDivider from "../../components/common/ColoredDivider";
import useResumeStore from "../../store/resume.store";
import { isCustom } from "../Design/Colors/ColorSelector";
import StylePropsProvider from "../Design/StylePropsProvider";
import BodyBox from "./components/BodyBox";
import HeaderBox from "./components/HeaderBox";
import HeaderRow from "./components/HeaderRow";
import Paper from "./components/Paper";
import { getHeaderLayout, getLayout } from "./legend";

const ResumePaper = () => {
  const { header, body } = useResumeStore((state) => state.properties.layout);
  const updateLayout = useResumeStore((state) => state.updateLayout);
  const spacing = useResumeStore((state) => state.spacing);
  const color = useResumeStore((state) => state.color);
  const primaryColor = isCustom(color) ? color : `${color}.600`;

  const lightModeProps: BoxProps = {
    bg: "gray.100"
  }
  const darkModeProps: BoxProps = {
    bg: "whiteAlpha.100"
  }
  const dndProps = useColorModeValue(lightModeProps, darkModeProps);

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;

    //If the column is same then create a new array and replace the original one.
    if (source.droppableId === destination.droppableId) {
      const parts = Array.from(body[source.droppableId]);
      const [reorderedPart] = parts.splice(source.index, 1);
      parts.splice(destination.index, 0, reorderedPart);
      
      const nextBody = produce(body, draft => {
        draft[source.droppableId] = parts;
      })
      updateLayout("body", nextBody)
    } else {
      const sourceParts = Array.from(body[source.droppableId]);
      const destinationParts = Array.from(body[destination.droppableId]);
      const [reorderedPart] = sourceParts.splice(source.index, 1);
      destinationParts.splice(destination.index, 0, reorderedPart);

      const nextBody = produce(body, draft => {
        draft[source.droppableId] = sourceParts;
        draft[destination.droppableId] = destinationParts;
      })

      updateLayout("body", nextBody)
    }
  };

  return (
    <StylePropsProvider>
      <Paper>
        <HeaderBox>
          {header.map((row, index) => (
            <HeaderRow key={index} index={index}>
              {row.map((layoutKey) => (
                <Box display="flex" aria-label={layoutKey} key={layoutKey}>
                  {getHeaderLayout(layoutKey)}
                </Box>
              ))}
            </HeaderRow>
          ))}
        </HeaderBox>
        <ColoredDivider color={primaryColor} mb="2" />
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <BodyBox py={spacing * 2}>
            {body.map((rowAsColumn, index) => (
              <Droppable key={index} droppableId={`${index}`}>
                {/*The 'provided' argument gives props to make columns as droppable areas*/}
                {(provided, snapshot) => (
                  <Box
                    height="100%"
                    display="flex"
                    flexDir="column"
                    aria-label={`Column-${index + 1}`}
                    index={index}
                    px={spacing * 4 - 1}
                    py={spacing * 2 - 1}
                    flexBasis={`${(1 / body.length) * 100}%`}
                    bg={snapshot.isDraggingOver ? dndProps.bg : 'inherit'}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {rowAsColumn.map((layoutKey, index) => (
                      <Box
                        display="flex"
                        aria-label={layoutKey}
                        width="100%"
                        key={layoutKey}
                      >
                        {/*These extra props are drilled to SectionBox component to enable dragging*/}
                        {getLayout(layoutKey, {
                          draggableId: layoutKey,
                          index: index,
                        })}
                      </Box>
                    ))}
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            ))}
          </BodyBox>
        </DragDropContext>
      </Paper>
    </StylePropsProvider>
  );
};

export default ResumePaper;
