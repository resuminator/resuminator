/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "../../styles/page.css";
import "../../styles/shadow.css";
import Certifications from "../Certifications/Certifications";
import ColoredLine from "../common/Line";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Title from "../Title/Title";

const useStyles = makeStyles((theme) => ({
  watermark: {
    padding: "0.5rem",
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
  logo: {
    fontWeight: 700,
  },
  paper: {
    backgroundColor: "inherit",
    marginBottom: "0.1rem",

    "&:hover, &:active": {
      border: "solid",
      borderWidth: "0.1rem",
      padding: "0.5rem",
      borderColor: theme.palette.secondary.light,
    },
  },
}));

function Resume({ element }) {
  const userLayout = {
    left: [
      <Experience key="exp" />,
      <Education key="edu" />,
      <Certifications key="certs" />,
    ],
    right: [<Projects key="proj" />, <Skills key="skill" />],
  };

  const classes = useStyles();
  const [children, setChildren] = useState(userLayout);
  const leftWide = "60%";
  const rightWide = "40%";

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const sourceId = result.source.droppableId;
    const destinationId = result.destination.droppableId;

    if (sourceId === destinationId) {
      const parts = Array.from(children[sourceId]);
      const [reorderedPart] = parts.splice(result.source.index, 1);
      parts.splice(result.destination.index, 0, reorderedPart);

      setChildren({ ...children, [sourceId]: parts });
    } else {
      const sourceParts = Array.from(children[sourceId]);
      const destinationParts = Array.from(children[destinationId]);
      const [reorderedPart] = sourceParts.splice(result.source.index, 1);
      destinationParts.splice(result.destination.index, 0, reorderedPart);

      setChildren({
        [sourceId]: sourceParts,
        [destinationId]: destinationParts,
      });
    }
  };

  return (
    <Box
      id="resume-paper"
      display="flex"
      flexDirection="column"
      bgcolor="contrast.light"
      className={`shadow`}
      width="21.0cm"
      height="29.7cm"
      zIndex="100"
      position="relative"
    >
      <Box id="printable-paper" ref={element}>
        <Title />
        <Contact />
        <ColoredLine color="#44318D" />
        <Box display="flex" justifyContent="space-between" id="resume-insider">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="left">
              {(provided) => (
                <Box
                  display="flex"
                  flexDirection="column"
                  p={1}
                  m={1}
                  pr={0}
                  width={leftWide}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {children.left.map((item, index) => (
                    <Draggable
                      key={item.key}
                      draggableId={item.key}
                      index={index}
                    >
                      {(provided) => (
                        <Paper
                          className={classes.paper}
                          color="inherit"
                          elevation={0}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {item}
                        </Paper>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
            <Droppable droppableId="right">
              {(provided) => (
                <Box
                  display="flex"
                  flexDirection="column"
                  p={1}
                  m={1}
                  pl={0}
                  width={rightWide}
                  className={classes.right}
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {children.right.map((item, index) => (
                    <Draggable
                      key={item.key}
                      draggableId={item.key}
                      index={index}
                    >
                      {(provided) => (
                        <Paper
                          className={classes.paper}
                          elevation={0}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          {item}
                        </Paper>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </DragDropContext>
        </Box>
        <Typography
          color="textSecondary"
          variant="caption"
          component="footer"
          align="center"
          id="watermark"
          className={classes.watermark}
        >
          Built using <span className={classes.logo}>Resuminator</span>
        </Typography>
      </Box>
    </Box>
  );
}

export default Resume;
