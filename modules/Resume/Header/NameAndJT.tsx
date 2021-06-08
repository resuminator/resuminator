import { Box, Text } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { StylePropsContext } from "../../Design/StylePropsProvider";
import useContactStore from "../../UserInput/Contact/store";

const NameAndJobTitleLayout = () => {
  const fullName = useContactStore((state) => state.fullName);
  const jobTitle = useContactStore((state) => state.jobTitle);
  const { headerTitleProps, headerSubtitleProps } =
    useContext(StylePropsContext);

  return (
    <Box display="flex" flexDir="column" justifyContent="center" m="2">
      <Text {...headerTitleProps}>{fullName}</Text>
      <Text {...headerSubtitleProps}>{jobTitle}</Text>
    </Box>
  );
};

export default NameAndJobTitleLayout;
