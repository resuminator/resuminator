import { createContext } from "react";
import useResumeStore from "../../store/resume.store";
import { FontProfile } from "../../store/types";
import Fonts from "../Design/FontLegend";
import { IStylePropsContext } from "../Design/types";

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

  const styleProps = {
    font: Fonts[fontProfile],
  };

  return (
    <StylePropsContext.Provider value={styleProps}>
      {children}
    </StylePropsContext.Provider>
  );
};

export default StylePropsProvider;
