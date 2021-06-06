import { BoxProps, TextProps } from "@chakra-ui/layout";
import { createContext } from "react";
import useResumeStore from "../../store/resume.store";
import { isCustom } from "./Colors/ColorSelector";
import Fonts from "./Fonts/legend";
import { FontProps } from "./Fonts/types";

export interface IStylePropsContext {
  font: FontProps;
  sectionTitleProps?: TextProps;
  titleRowProps?: TextProps;
  subtitleRowProps?: TextProps;
  bodyProps?: BoxProps;
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
  const primaryColor = isCustom(color) ? color : `${color}.700`;

  const styleProps: IStylePropsContext = {
    font: Fonts[fontProfile],
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
      mb: "1",
      ...Fonts[fontProfile].secondary,
    },
    bodyProps: {
      sx: {
        ".ProseMirror.viewer": { ...Fonts[fontProfile].body },
      },
    },
  };

  return (
    <StylePropsContext.Provider value={styleProps}>
      {children}
    </StylePropsContext.Provider>
  );
};

export default StylePropsProvider;
