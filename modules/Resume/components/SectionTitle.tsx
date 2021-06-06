import { Text } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const SectionTitle: React.FC = ({ children }) => {
  const props = useContext(StylePropsContext).sectionTitleProps;

  return (
    <Text aria-label="Section Title" mb="2" {...props}>
      {children}
    </Text>
  );
};

export default SectionTitle;
