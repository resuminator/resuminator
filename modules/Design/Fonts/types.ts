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
  heading?: CustomTextProps;
  primary: CustomTextProps;
  secondary?: CustomTextProps;
  body?: CustomTextProps;
}

export type FontsObject = {
  [key in FontProfile]: FontProps;
};
