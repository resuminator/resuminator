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

import { Box, BoxProps } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useResizeDetector } from "react-resize-detector";
import useGlobalStore from "../../../store/global.store";

const Paper: React.FC<BoxProps> = ({ children, ...props }) => {
  const grayscaleFilter = useGlobalStore((state) => state.grayscaleFilter);
  const applyFilters = grayscaleFilter && { filter: "grayscale(1)" };
  const setContentOverflow = useGlobalStore(
    (state) => state.setContentOverflow
  );
  const { height, ref } = useResizeDetector();

  useEffect(() => {
    if (height > 1123) {
      setContentOverflow(true);
    } else {
      setContentOverflow(false);
    }
  }, [height, setContentOverflow]);

  return (
    <Box
      display="flex"
      flexDir="column"
      aria-label="Resume Paper"
      minHeight="29.7cm"
      id="resumePaperContent"
      ref={ref}
      // overflowY="clip"
      {...applyFilters}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Paper;
