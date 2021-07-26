import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import ColoredDivider from "../../../components/common/ColoredDivider";
import { StylePropsContext } from "../../Design/StylePropsProvider";

const SectionTitle: React.FC = ({ children }) => {
  const props = useContext(StylePropsContext).sectionTitleProps;
  const { color } = props;

  return (
    <Box mb="2">
      <Text aria-label="Section Title" {...props}>
        {children}
      </Text>
      <ColoredDivider color={color} />
    </Box>
  );
};

export default SectionTitle;
