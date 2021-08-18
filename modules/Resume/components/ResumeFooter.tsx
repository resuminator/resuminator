import { Text } from "@chakra-ui/react";
import React from "react";
import TextLink from "../../../components/common/TextLink";
import { WEBSITE } from "../../../data/RefLinks";

interface ResumeFooterProps {
  color?: string;
}

const ResumeFooter: React.FC<ResumeFooterProps> = ({ color }) => {
  return (
    <Text
      as="footer"
      fontSize="sm"
      color="gray"
      width="100%"
      textAlign="center"
      p="1"
      flexShrink={0}
    >
      Built with{" "}
      <TextLink
        fontFamily="Manrope"
        fontWeight="bold"
        text="Resuminator"
        link={WEBSITE}
        color={color}
      />
    </Text>
  );
};

export default ResumeFooter;
