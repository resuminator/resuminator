import { Button } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import Section from "../../components/layouts/Section";
import { useCustomToast } from "../../hooks/useCustomToast";
import { Status } from "../../utils/constants";
import useContactStore from "../UserInput/Contact/store";
import { handleDownload } from "./downloadHandler";

interface DownloadResumeProps {
  id: string;
}

const DownloadResume: React.FC<DownloadResumeProps> = ({ id }) => {
  const [status, setStatus] = useState<Status>(Status.idle);
  const { fullName } = useContactStore();
  const { createToast } = useCustomToast();
  const token = Cookies.get("token");
  const RESUME_NAME = `${fullName} Resume.pdf`;

  const download = () =>
    handleDownload(token, id, RESUME_NAME, setStatus, createToast);

  return (
    <Section
      header={{
        title: "Download Resume",
        subtitle: "PDFs can be used to upload to any job portal easily.",
        mb: "4",
      }}
    >
      <Button
        variant="solid"
        colorScheme="blue"
        rightIcon={<FiDownload />}
        onClick={download}
        isLoading={status === Status.loading}
        loadingText="Generating PDF"
      >
        Download as PDF
      </Button>
    </Section>
  );
};

export default DownloadResume;
