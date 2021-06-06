import { Box } from "@chakra-ui/layout";
import React from "react";
import DataRow from "../../../components/elements/DataRow";
import { parseDate } from "../../../utils";
import useCertificationStore from "../../UserInput/Certification/store";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import SubtitleRow from "../components/SubtitleRow";
import TitleRow from "../components/TitleRow";

const CertificationsLayout = () => {
  const data = useCertificationStore((state) => state.data).filter(
    (item) => !item.isHidden
  );

  const getDurationString = (start: Date, end: Date) => {
    if (!end)
      return `Issued: ${parseDate(new Date(start), "YM")} • Never expires`;
    return `Issued: ${parseDate(new Date(start), "YM")} • Expires: ${parseDate(
      new Date(end),
      "YM"
    )}`;
  };

  const getAuthorityAndCredID = (authority: string, credId: string) => {
    const trimLengthAuth = authority.trim().length;
    const trimLengthCredId = credId.trim().length;

    if (!trimLengthCredId && !trimLengthAuth) return null;
    if (trimLengthCredId && trimLengthAuth)
      return `${authority}` + " • " + `Credential ID: ${credId}` + " | ";
    if (!trimLengthCredId) return authority + " | ";
    if (!trimLengthAuth) return `Credential ID: ${credId}` + " | ";
  };

  return (
    <Box aria-label="Certification Layout" w="inherit">
      <SectionTitle>Certification</SectionTitle>
      {data.map((item) => (
        <SectionContent key={item._id}>
          <DataRow>
            <TitleRow>{item.certificateName}</TitleRow>
          </DataRow>
          <DataRow mb="1">
            <SubtitleRow>
              {getAuthorityAndCredID(item.authority, item.credentialNumber)}
              {getDurationString(item.start, item.end)}
            </SubtitleRow>
          </DataRow>
        </SectionContent>
      ))}
    </Box>
  );
};

export default CertificationsLayout;
