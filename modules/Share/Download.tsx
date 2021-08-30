/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

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
