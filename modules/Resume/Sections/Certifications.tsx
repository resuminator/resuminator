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

import React from "react";
import DataRow from "../../../components/elements/DataRow";
import { parseDate } from "../../../utils";
import useCertificationStore from "../../UserInput/Certification/store";
import SectionBox from "../components/SectionBox";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import SubtitleRow from "../components/SubtitleRow";
import TitleRow from "../components/TitleRow";

const CertificationsLayout = (props) => {
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
    <SectionBox aria-label="Certification Layout" {...props}>
      <SectionTitle>Certification</SectionTitle>
      {data.map((item) => (
        <SectionContent key={item._id}>
          <DataRow>
            <TitleRow as="a" href={item.link}>
              {item.certificateName}
            </TitleRow>
          </DataRow>
          <DataRow mb="1">
            <SubtitleRow>
              {getAuthorityAndCredID(item.authority, item.credentialNumber)}
              {getDurationString(item.start, item.end)}
            </SubtitleRow>
          </DataRow>
        </SectionContent>
      ))}
    </SectionBox>
  );
};

export default CertificationsLayout;
