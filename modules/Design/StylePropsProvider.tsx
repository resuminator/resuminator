import { createContext } from "react";
import useResumeStore from "../../store/resume.store";
import Fonts from "./Fonts/legend";
import { FontProps } from "./Fonts/types";

export interface IStylePropsContext {
  font: FontProps;
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
