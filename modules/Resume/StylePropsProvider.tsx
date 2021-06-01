import { createContext } from "react";
import useResumeStore from "../../store/resume.store";
import { FontProfile } from "../../store/types";

interface IStylePropsContext {
  font: {
    family: string;
    size?: string;
  };
}

export const StylePropsContext = createContext<IStylePropsContext>({
  font: { family: "", size: "md" },
});

const StylePropsProvider: React.FC = ({ children }) => {
  const fontProfile = useResumeStore((state) => state.fontProfile);
  const spacing = useResumeStore((state) => state.spacing);

  const generateFontsProps = (family: string, size?: string) => ({
    family,
    size,
  });

  const getFontProps = (profileKey: FontProfile) => {
    switch (profileKey) {
      case "CLASSIC":
        return generateFontsProps("Inter");
      case "MAGAZINE":
        return generateFontsProps("Libre Baskerville");
      default:
        return generateFontsProps("Arial");
    }
  };

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
