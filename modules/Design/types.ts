import { TextProps } from "@chakra-ui/layout";
import { FontProfile } from "../../store/types";

export interface FontProps {
  family: {
    primary: string;
    secondary?: string;
  };
  size?: TextProps["fontSize"];
  weight?: TextProps["fontWeight"];
}

export interface IStylePropsContext {
  font: FontProps;
}

export type FontsObject = {
  [key in FontProfile]: FontProps;
};
