import { Text } from "@chakra-ui/layout";
import React from "react";
import LinkText from "../../components/common/LinkText";

interface Props {
  page: "LOGIN" | "SIGNUP";
}

const PageToggle: React.FC<Props> = ({ page }) => {
  switch (page) {
    case "LOGIN":
      return (
        <Text>
          Don&apos;t have an account?{" "}
          <LinkText href="/signup" fontWeight="medium" color="blue.600">
            Create one
          </LinkText>
        </Text>
      );
    case "SIGNUP":
      return (
        <Text>
          Already have an account?{" "}
          <LinkText href="/login" fontWeight="medium" color="blue.600">
            Log In
          </LinkText>
        </Text>
      );
    default:
      return null;
  }
};

export default PageToggle;
