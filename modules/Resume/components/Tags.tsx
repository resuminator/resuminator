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
import { Tag } from "@chakra-ui/tag";
import React, { useContext } from "react";
import useResumeStore from "../../../store/resume.store";
import { StylePropsContext } from "../../Design/StylePropsProvider";

interface Props {
  list: Array<string>;
}

const createColorScheme = (color) => {
  const isCustomColor = color.startsWith('#') && color.length > 1;
  if (!isCustomColor) return { colorScheme: color };
  return {
    backgroundColor: hexToRgba(color, 0.2),
    color: hexToRgba(color)
  };
};

const hexToRgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

const Tags: React.FC<Props> = ({ list }) => {
  const color = useResumeStore((state) => state.color);
  const font = useContext(StylePropsContext).font;

  return (
    <Box aria-label="Tags">
      {list.map((tag) =>
        tag.trim().length ? (
          <Tag
            {...createColorScheme(color)}
            {...font.body}
            borderRadius="full"
            variant="subtle"
            key={tag}
            mr="1"
            mb="1.5"
          >
            {tag.trim()}
          </Tag>
        ) : null
      )}
    </Box>
  );
};

export default Tags;
