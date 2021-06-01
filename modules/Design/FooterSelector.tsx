import { Text } from "@chakra-ui/layout";
import React from "react";
import Section from "../../components/layouts/Section";

interface Props {}

const footerElements = ["WATERMARK", "DATE", "DATE_W"];

const FooterSelector = (props: Props) => {
  return (
    <Section
      header={{
        title: "Footer style",
        subtitle: "Select a footer style for your resume",
        mb: "2",
        color: "gray",
      }}
    >
      <Text fontWeight="bold" color="InactiveCaptionText">
        Coming Soon
      </Text>
    </Section>
  );
};

export default FooterSelector;
