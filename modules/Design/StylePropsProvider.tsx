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

import { BoxProps, TextProps } from "@chakra-ui/layout";
import { ColorProps } from "@chakra-ui/styled-system";
import { createContext } from "react";
import useResumeStore from "../../store/resume.store";
import { isCustom } from "./Colors/ColorSelector";
import Fonts from "./Fonts/legend";
import { FontProps } from "./Fonts/types";

export interface IStylePropsContext {
  font: FontProps;
  headerTitleProps?: TextProps;
  headerSubtitleProps?: TextProps;
  sectionTitleProps?: TextProps;
  titleRowProps?: TextProps;
  subtitleRowProps?: TextProps;
  bodyProps?: BoxProps;
  primaryColor?: ColorProps["color"];
}

export const StylePropsContext = createContext<IStylePropsContext>({
  font: {
    primary: {
      fontFamily: "inherit",
    },
  },
});

const StylePropsProvider: React.FC = ({ children }) => {
  const fontProfile = useResumeStore((state) => state.fontProfile);
  const spacing = useResumeStore((state) => state.spacing);
  const color = useResumeStore((state) => state.color);
  const primaryColor = isCustom(color) ? color : `${color}.600`;

  const styleProps: IStylePropsContext = {
    font: Fonts[fontProfile],
    headerTitleProps: {
      color: "gray.600",
      ...Fonts[fontProfile].headerTitle,
    },
    headerSubtitleProps: {
      color: primaryColor,
      ...Fonts[fontProfile].headerSubtitle,
    },
    sectionTitleProps: {
      color: primaryColor,
      ...Fonts[fontProfile].heading,
    },
    titleRowProps: {
      color: primaryColor,
      ...Fonts[fontProfile].primary,
    },
    subtitleRowProps: {
      color: "gray.500",
      ...Fonts[fontProfile].secondary,
    },
    bodyProps: {
      sx: {
        ".ProseMirror.viewer": { ...Fonts[fontProfile].body },
      },
    },
    primaryColor,
  };

  return (
    <StylePropsContext.Provider value={styleProps}>
      {children}
    </StylePropsContext.Provider>
  );
};

export default StylePropsProvider;
