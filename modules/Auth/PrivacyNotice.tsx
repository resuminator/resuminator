import { Text } from "@chakra-ui/layout";
import LinkText from "../../components/common/LinkText";

const PrivacyNotice = () => {
  return (
    <Text align="center" color="InactiveCaptionText" fontSize="smaller" my="4">
      Continue to log in to agree to Resuminator’s{" "}
      <LinkText href="" textDecoration="underline">
        Terms of Service
      </LinkText>{" "}
      and acknowledge that Resuminator’s{" "}
      <LinkText href="" textDecoration="underline">
        Privacy Policy
      </LinkText>{" "}
      applies to you.
    </Text>
  );
};

export default PrivacyNotice;
