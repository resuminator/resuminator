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

import { TextProps } from "@chakra-ui/layout";
import { FontProfile } from "../../../store/types";

export interface CustomTextProps extends TextProps {
  fontFamily: TextProps["fontFamily"];
  fontSize?: TextProps["fontSize"];
  fontWeight?: TextProps["fontWeight"];
  fontStyle?: TextProps["fontStyle"];
  lineHeight?: TextProps["lineHeight"];
}

export interface FontProps {
  headerTitle?: CustomTextProps;
  headerSubtitle?: CustomTextProps;
  heading?: CustomTextProps;
  primary: CustomTextProps;
  secondary?: CustomTextProps;
  body?: CustomTextProps;
}

export type FontsObject = {
  [key in FontProfile]: FontProps;
};
