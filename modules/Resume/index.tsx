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

import { Box } from "@chakra-ui/layout";
import { BoxProps, useColorModeValue } from "@chakra-ui/react";
import produce from "immer";
import React from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { patchLayout } from "../../apis/patchTemplate";
import ColoredDivider from "../../components/common/ColoredDivider";
import { useCustomToast } from "../../hooks/useCustomToast";
import { usePatchParams } from "../../hooks/usePatchParams";
import useResumeStore from "../../store/resume.store";
import { Result, ResumeLayoutObject } from "../../store/types";
import { isCustom } from "../Design/Colors/ColorSelector";
import StylePropsProvider from "../Design/StylePropsProvider";
import BodyBox from "./components/BodyBox";
import HeaderBox from "./components/HeaderBox";
import HeaderRow from "./components/HeaderRow";
import Paper from "./components/Paper";
import ResumeFooter from "./components/ResumeFooter";
import { getHeaderLayout, getLayout } from "./legend";

const ResumePaper = () => {
  const layout = useResumeStore((state) => state.properties.layout);
  const { header, body } = layout;
  const updateLayout = useResumeStore((state) => state.updateLayout);
  const spacing = useResumeStore((state) => state.spacing);
  const color = useResumeStore((state) => state.color);
  const primaryColor = isCustom(color) ? color : `${color}.600`;
  const { token, resumeId } = usePatchParams();

  const { createToast } = useCustomToast();

  const lightModeProps: BoxProps = {
    bg: "gray.100"
  };
  const darkModeProps: BoxProps = {
    bg: "whiteAlpha.100"
  };
  const dndProps = useColorModeValue(lightModeProps, darkModeProps);

  const saveBodyToDB = async (nextBody: ResumeLayoutObject["body"]) => {
    updateLayout("body", nextBody);
    return await patchLayout(token, resumeId, {
      layout: { ...layout, body: nextBody }
    })
      .then((res: Result) => {
        updateLayout("body", res.template.layout.body);
        return createToast("Resume layout updated", "success");
      })
      .catch(() =>
        createToast(
          "Couldn't update resume layout",
          "error",
          "Please try again in sometime"
        )
      );
  };

  const handleOnDragEnd = async (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;

    //If the column is same then create a new array and replace the original one.
    if (source.droppableId === destination.droppableId) {
      const parts = Array.from(body[source.droppableId]);
      const [reorderedPart] = parts.splice(source.index, 1);
      parts.splice(destination.index, 0, reorderedPart);

      const nextBody = produce(body, (draft) => {
        draft[source.droppableId] = parts;
      });
      return await saveBodyToDB(nextBody);
    } else {
      const sourceParts = Array.from(body[source.droppableId]);
      const destinationParts = Array.from(body[destination.droppableId]);
      const [reorderedPart] = sourceParts.splice(source.index, 1);
      destinationParts.splice(destination.index, 0, reorderedPart);

      const nextBody = produce(body, (draft) => {
        draft[source.droppableId] = sourceParts;
        draft[destination.droppableId] = destinationParts;
      });

      return await saveBodyToDB(nextBody);
    }
  };

  const getXspacing = (spacing: number) => {
    const BASE_SPACING = 1;
    const SPACE_FACTOR = 4;
    const SPACE_ADJUSTMENT = 1;
    const DEFAULT = 3;

    // These adjustments have been made to return spacing as ["0.125rem", chakra-spacing-1, chakra-spacing-2, chakra-spacing-3]

    return spacing >= BASE_SPACING ? (spacing * SPACE_FACTOR - SPACE_ADJUSTMENT) : DEFAULT
  };

  const getYspacing = (spacing: number) => {
    const BASE_SPACING = "0.125rem";
    const SPACE_FACTOR = 2;
    const SPACE_ADJUSTMENT = 1;

    // These adjustments have been made to return spacing as ["0.125rem", chakra-spacing-1, chakra-spacing-2, chakra-spacing-3]

    const spacingInChakraUnits = spacing * SPACE_FACTOR - SPACE_ADJUSTMENT;

    return spacingInChakraUnits === 0 ? BASE_SPACING : spacingInChakraUnits;
  }

  return (
    <StylePropsProvider>
      <Paper>
        <Box aria-label="Resume Content" flex="1">
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
                      px={getXspacing(spacing)}
                      py={getYspacing(spacing)}
                      flexBasis={`${(1 / body.length) * 100}%`}
                      bg={snapshot.isDraggingOver ? dndProps.bg : "inherit"}
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
                            index: index
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
        </Box>
        <ResumeFooter color={primaryColor} />
      </Paper>
    </StylePropsProvider>
  );
};

export default ResumePaper;
