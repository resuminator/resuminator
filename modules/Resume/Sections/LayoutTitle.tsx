import { Text } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const LayoutTitle: React.FC = ({ children }) => {
  const props = useContext(StylePropsContext).sectionTitleProps;

  return (
    <Text mb="2" {...props}>
      {children}
    </Text>
  );
};

export default LayoutTitle;
