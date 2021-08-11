import { ButtonGroup, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Section from "../../components/layouts/Section";
import { Status } from "../../utils/constants";

interface Props {}

const ShareSocial = (props: Props) => {
  const [status, setStatus] = useState<Status>(Status.idle);
  return (
    <Section
      header={{
        title: "Share on social media",
        subtitle: "Share a link of your resume on your socials",
        mb: "4",
      }}
    >
      <Text color="gray.500" mb="4">
        Coming Soon
      </Text>
      <ButtonGroup isDisabled>
        <IconButton aria-label="Share on twitter" icon={<FaTwitter />} />
        <IconButton aria-label="Share on linkedin" icon={<FaLinkedin />} />
      </ButtonGroup>
    </Section>
  );
};

export default ShareSocial;
