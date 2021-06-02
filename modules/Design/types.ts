import { TextProps } from "@chakra-ui/layout";
import { FontProfile } from "../../store/types";
export interface CustomTextProps {
  fontFamily: TextProps["fontFamily"];
  fontSize?: TextProps["fontSize"];
  fontWeight?: TextProps["fontWeight"];
  fontStyle?: TextProps["fontStyle"];
  lineHeight?: TextProps["lineHeight"];
}

export interface FontProps {
  primary: CustomTextProps;
  secondary?: CustomTextProps;
}

export type FontsObject = {
  [key in FontProfile]: FontProps;
};

export interface IStylePropsContext {
  font: FontProps;
}
