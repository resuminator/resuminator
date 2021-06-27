import { Text } from "@chakra-ui/layout";
import React, { useContext } from "react";
import ColoredDivider from "../../../components/common/ColoredDivider";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const SectionTitle: React.FC = ({ children }) => {
  const props = useContext(StylePropsContext).sectionTitleProps;
  const { color } = props;

  return (
    <Text aria-label="Section Title" mb="2" {...props}>
      {children}
      <ColoredDivider color={color} />
    </Text>
  );
};

export default SectionTitle;
