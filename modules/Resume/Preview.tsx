/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2022 Resuminator Authors

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
import ColoredDivider from "../../components/common/ColoredDivider";
import useResumeStore from "../../store/resume.store";
import { isCustom } from "../Design/Colors/ColorSelector";
import StylePropsProvider from "../Design/StylePropsProvider";
import BodyBox from "./components/BodyBox";
import HeaderBox from "./components/HeaderBox";
import HeaderRow from "./components/HeaderRow";
import Paper from "./components/Paper";
import ResumeFooter from "./components/ResumeFooter";
import { getHeaderLayout, getLayout } from "./legend";

const ResumePreview = () => {
  const layout = useResumeStore((state) => state.properties.layout);
  const { header, body } = layout;
  const spacing = useResumeStore((state) => state.spacing);
  const color = useResumeStore((state) => state.color);
  const primaryColor = isCustom(color) ? color : `${color}.600`;

  const getXspacing = (spacing: number) => {
    const BASE_SPACING = 1;
    const SPACE_FACTOR = 4;
    const SPACE_ADJUSTMENT = 1;
    const DEFAULT = 3;

    // These adjustments have been made to return spacing as ["0.125rem", chakra-spacing-1, chakra-spacing-2, chakra-spacing-3]

    return spacing >= BASE_SPACING
      ? spacing * SPACE_FACTOR - SPACE_ADJUSTMENT
      : DEFAULT;
  };

  const getYspacing = (spacing: number) => {
    const BASE_SPACING = "0.125rem";
    const SPACE_FACTOR = 2;
    const SPACE_ADJUSTMENT = 1;

    // These adjustments have been made to return spacing as ["0.125rem", chakra-spacing-1, chakra-spacing-2, chakra-spacing-3]

    const spacingInChakraUnits = spacing * SPACE_FACTOR - SPACE_ADJUSTMENT;

    return spacingInChakraUnits === 0 ? BASE_SPACING : spacingInChakraUnits;
  };

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

          <BodyBox py={spacing * 2}>
            {body.map((rowAsColumn, index) => (
              <Box
                key={`Column-${index + 1}`}
                height="100%"
                display="flex"
                flexDir="column"
                aria-label={`Column-${index + 1}`}
                index={index}
                px={getXspacing(spacing)}
                py={getYspacing(spacing)}
                flexBasis={`${(1 / body.length) * 100}%`}
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
                      index: index
                    })}
                  </Box>
                ))}
              </Box>
            ))}
          </BodyBox>
        </Box>
        <ResumeFooter color={primaryColor} />
      </Paper>
    </StylePropsProvider>
  );
};

export default ResumePreview;
