import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import Section from "../../components/layouts/Section";
import { Status } from "../../utils/constants";

interface DownloadResumeProps {
  id: string;
}

const DownloadResume: React.FC<DownloadResumeProps> = ({id}) => {
  const [status, setStatus] = useState<Status>(Status.idle);
  const router = useRouter();

  const handleDownload = () => {
    router.push(`/resume/${id}`)
  }

  return (
    <Section
      header={{
        title: "Download Resume",
        subtitle: "PDFs can be used to upload to any job portal easily.",
        mb: "4",
      }}
    >
      <Button variant="solid" colorScheme="blue" rightIcon={<FiDownload />} onClick={handleDownload}>
        Download as PDF
      </Button>
    </Section>
  );
};

export default DownloadResume;
