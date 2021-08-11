import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import Section from "../../components/layouts/Section";
import { Status } from "../../utils/constants";

interface Props {}

const DownloadResume = (props: Props) => {
  const [status, setStatus] = useState<Status>(Status.idle);
  return (
    <Section
      header={{
        title: "Download Resume",
        subtitle: "PDFs can be used to upload to any job portal easily.",
        mb: "4",
      }}
    >
      <Button variant="solid" colorScheme="blue" rightIcon={<FiDownload />}>
        Download as PDF
      </Button>
    </Section>
  );
};

export default DownloadResume;
