import { Button } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { downloadPdf } from "../../apis/download";
import Section from "../../components/layouts/Section";
import { useCustomToast } from "../../hooks/useCustomToast";
import { Status } from "../../utils/constants";
import useContactStore from "../UserInput/Contact/store";

interface DownloadResumeProps {
  id: string;
}

const DownloadResume: React.FC<DownloadResumeProps> = ({ id }) => {
  const [status, setStatus] = useState<Status>(Status.idle);
  const { fullName } = useContactStore();
  const { createToast } = useCustomToast();
  const token = Cookies.get("token");

  const handleDownload = async () => {
    setStatus(Status.loading);
    return await downloadPdf(token, id)
      .then((res) => {
        const blob = new Blob([res.data], { type: "application/pdf" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `${fullName}-Resume.pdf`;
        link.click();
        createToast("PDF Generated Successfully", "success");
        setStatus(Status.success);
      })
      .catch(() => {
        setStatus(Status.error);
        createToast(
          "PDF Generation Failed",
          "error",
          "Please try again later. If the problem persists, contact us."
        );
      })
      .finally(() => {
        setStatus(Status.idle);
      });
  };

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
        onClick={handleDownload}
        isLoading={status === Status.loading}
        loadingText="Generating PDF"
      >
        Download as PDF
      </Button>
    </Section>
  );
};

export default DownloadResume;
