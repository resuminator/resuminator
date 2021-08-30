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

import { Text } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import DataRow from "../../../components/elements/DataRow";
import usePublicationStore from "../../UserInput/Publications/store";
import { PublicationDataObject } from "../../UserInput/Publications/types";
import ExternalLink from "../components/ExternalLink";
import SectionBox from "../components/SectionBox";
import SectionContent from "../components/SectionContent";
import SectionTitle from "../components/SectionTitle";
import TextItem from "../components/TextItem";

const WithQuotes = ({ text = "" }) =>
  text.length ? (
    <Text mx="1" as="span" fontStyle="italic">
      &ldquo;{text}&rdquo;
    </Text>
  ) : null;

/**
 * Appends and Prepends a string with special characters
 * @param prefix String: Special Character
 * @param text String: Text to wrap
 * @param suffix String: Special Character
 * @returns Null if text is not present, {prefix}{text}{suffix} in all other cases
 */
const withSpecialCharacters = (prefix = "", text = "", suffix = "") =>
  text && text.length ? `${prefix}${text}${suffix}` : null;

const MLAStyle: React.FC<{ item: PublicationDataObject }> = ({ item }) => (
  <Fragment>
    {item.authorNames} <WithQuotes text={item.articleTitle} />{" "}
    {item.journalName} {withSpecialCharacters("", item.volumeNumber, ".")}
    {item.issueNumber} {withSpecialCharacters("(", item.year, ")")}{" "}
    {withSpecialCharacters(": ", item.pages)}
  </Fragment>
);

const APAStyle: React.FC<{ item: PublicationDataObject }> = ({ item }) => (
  <Fragment>
    {withSpecialCharacters("", item.authorNames, ".")}{" "}
    {withSpecialCharacters("", item.articleTitle, ".")} {item.journalName}{" "}
    {item.volumeNumber}
    {withSpecialCharacters("(", item.issueNumber, "): ")}
    {withSpecialCharacters("", item.pages, ". ")} {item.year}
  </Fragment>
);

const PublicationsLayout = (props) => {
  const data = usePublicationStore((state) => state.data).filter(
    (item) => !item.isHidden
  );

  return (
    <SectionBox aria-label="Publication Layout" {...props}>
      <SectionTitle>Publications</SectionTitle>
      {data.map((item) => (
        <SectionContent key={item._id}>
          <DataRow mb="1" key={item._id}>
            <TextItem as="li">
              {item.format === "MLA" ? (
                <MLAStyle item={item} />
              ) : (
                <APAStyle item={item} />
              )}
            </TextItem>
          </DataRow>
          <DataRow>
            <ExternalLink
              as="a"
              pb="0"
              href={item.doi && `https://doi.org/${item.doi}`}
            />
          </DataRow>
        </SectionContent>
      ))}
    </SectionBox>
  );
};

export default PublicationsLayout;
