import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { Fragment } from "react";
import TextLink from "../../components/common/TextLink";

interface Props {
  isHidden?: boolean;
}

export const Content = () => (
  <Fragment>
    Resuminator{" "}
    <TextLink
      text="Version 1"
      link="https://app.resuminator.in"
      color="inherit"
      textDecor="underline"
    />{" "}
    is going away on 30th September 2021. Switch to Version 2 today to continue
    using Resuminator. <TextLink text="Learn more" link="#" />
  </Fragment>
);

const Announcement: React.FC<Props> = ({ isHidden = false, children }) => {
  const textColor = useColorModeValue("blue.800", "blue.100");
  const bgColor = useColorModeValue("blue.50", "blue.900");
  return (
    !isHidden && (
      <Box
        bg={bgColor}
        width="100%"
        p="2"
        color={textColor}
        textAlign="center"
        fontSize="sm"
      >
        <Content />
      </Box>
    )
  );
};

export default Announcement;
