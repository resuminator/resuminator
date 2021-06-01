import { TextProps } from "@chakra-ui/layout";
import { createContext } from "react";
import useResumeStore from "../../store/resume.store";
import { FontProfile } from "../../store/types";

interface FontProps {
  family: {
    primary: string;
    secondary?: string;
  };
  size?: TextProps["fontSize"];
  weight?: TextProps["fontWeight"];
}
interface IStylePropsContext {
  font: FontProps;
}

export const StylePropsContext = createContext<IStylePropsContext>({
  font: {
    family: { primary: "", secondary: "" },
    size: "md",
    weight: "regular",
  },
});

const generateFontsProps = (
  family: FontProps["family"],
  size?: FontProps["size"],
  weight?: FontProps["weight"]
) => ({
  family,
  size,
  weight,
});

export const getFontProps = (profileKey: FontProfile) => {
  switch (profileKey) {
    case "CLASSIC":
      return generateFontsProps({ primary: "Inter" });
    case "MAGAZINE":
      return generateFontsProps({
        primary: "Playfair Display",
        secondary: "Source Sans Pro",
      });
    default:
      return generateFontsProps({ primary: "Arial" });
  }
};


const StylePropsProvider: React.FC = ({ children }) => {
  const fontProfile = useResumeStore((state) => state.fontProfile);
  const spacing = useResumeStore((state) => state.spacing);

  const styleProps = {
    font: getFontProps(fontProfile),
  };

  return (
    <StylePropsContext.Provider value={styleProps}>
      {children}
    </StylePropsContext.Provider>
  );
};

export default StylePropsProvider;
