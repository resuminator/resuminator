import { Text } from "@chakra-ui/react";
import { useState } from "react";
import Section from "../../components/layouts/Section";
import { Status } from "../../utils/constants";

interface Props {}

const ShareLink = (props: Props) => {
  const [status, setStatus] = useState<Status>(Status.idle);
  return (
    <Section
      header={{
        title: "Share via link",
        subtitle:
          "Super quick and easy way to share your resume to a recruiter.",
        mb: "4",
      }}
    >
      <Text color="gray.500">Coming Soon</Text>
    </Section>
  );
};

export default ShareLink;
