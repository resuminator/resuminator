import { Box } from "@chakra-ui/layout";
import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ColoredDivider from "../../components/common/ColoredDivider";
import useResumeStore from "../../store/resume.store";
import { isCustom } from "../Design/Colors/ColorSelector";
import StylePropsProvider from "../Design/StylePropsProvider";
import BodyBox from "./components/BodyBox";
import BodyColumn from "./components/BodyColumn";
import BodySectionBox from "./components/BodySectionBox";
import HeaderBox from "./components/HeaderBox";
import HeaderRow from "./components/HeaderRow";
import Paper from "./components/Paper";
import { getHeaderLayout, getLayout } from "./legend";

const ResumePaper = () => {
  const { header, body } = useResumeStore((state) => state.properties.layout);
  const spacing = useResumeStore((state) => state.spacing);
  const color = useResumeStore((state) => state.color);
  const primaryColor = isCustom(color) ? color : `${color}.600`;

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
        <DragDropContext onDragEnd={() => console.log("Drag Complete")}>
          <BodyBox py={spacing * 2}>
            {body.map((rowAsColumn, index) => (
              <Droppable key={index} droppableId={`column-${index + 1}`}>
                {(provided) => (
                  <Box
                    display="flex"
                    flexDir="column"
                    aria-label={`Column-${index + 1}`}
                    index={index}
                    px={spacing * 4}
                    py={spacing * 2}
                    flexBasis={`${(1 / body.length) * 100}%`}
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
