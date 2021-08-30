import { Text } from "@chakra-ui/layout";
import LinkText from "../../components/common/LinkText";
import { LICENSE, PRIVACY_POLICY } from "../../data/DocLinks";

const PrivacyNotice = () => {
  return (
    <Text align="center" color="InactiveCaptionText" fontSize="smaller" my="4">
      Continue to agree to Resuminator’s{" "}
      <LinkText href={LICENSE} textDecoration="underline">
        Terms of Service
      </LinkText>{" "}
      and acknowledge that Resuminator’s{" "}
      <LinkText href={PRIVACY_POLICY} textDecoration="underline">
        Privacy Policy
      </LinkText>{" "}
      applies to you.
    </Text>
  );
};

export default PrivacyNotice;
