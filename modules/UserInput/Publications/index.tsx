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

import { HStack } from "@chakra-ui/layout";
import dynamic from "next/dynamic";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { patchPublication } from "../../../apis/patchSection";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import ExpandableCard from "../../../components/layouts/Cards/ExpandableCard";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import PublicationHints from "../../../data/Hints/publication";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { getUniqueID } from "../../../utils";
import Autosave from "../Autosave";
import { handleChange, handleDragEnd } from "../handlers";
import SectionControls from "../SectionControls";
import FormatRadioGroup from "./FormatRadioGroup";
import usePublicationStore from "./store";
import { PublicationDataObject } from "./types";
const InputWithLabel = dynamic(
  () => import("../../../components/common/InputWithLabel")
);

const Publications = () => {
  const data = usePublicationStore((state) => state.data);
  const setData = usePublicationStore((state) => state.setData);
  const addData = usePublicationStore((state) => state.add);
  const updateData = usePublicationStore((state) => state.update);
  const { createToast } = useCustomToast();

  //This will be removed when server is connected. For mock purposes only.
  const DummyData: PublicationDataObject = {
    _id: getUniqueID(),
    isHidden: false,
    authorNames: "",
    journalName: "",
    articleTitle: "",
    volumeNumber: "",
    issueNumber: "",
    pages: "",
    year: "",
    format: "MLA",
    doi: ""
  };

  //mocking data from DB.
  const getNewObject = async () => {
    return DummyData;
  };

  //Mock async request
  const handleAdd = async () => {
    await getNewObject().then((res) => addData(res));
  };

  //Mocked delete request from server.
  const handleDelete = async (id: string) => {
    const nextState = data.filter((item) => item._id !== id);
    setData(nextState);
    return createToast("Deleted Successfully", "success");
  };

  return (
    <Section
      header={{
        title: "Publications",
        subtitle: "Showcase your academic publications",
        mb: "2"
      }}
    >
      <Autosave data={data} patchFn={patchPublication} />
      <SectionControls layoutKey="PUBLICATIONS" hintData={PublicationHints}>
        <TooltipIconButton
          label="Add new publication"
          aria-label="New-Publication"
          icon={<FiPlus />}
          onClick={handleAdd}
        />
      </SectionControls>
      <DndWrapper
        droppableId="publication"
        onDragEnd={(result) => handleDragEnd(result, data, setData)}
      >
        {data.map((item, index) => (
          <ExpandableCard
            DisplayCardProps={{
              draggableId: item._id,
              index: index,
              title: item.articleTitle,
              subtitle: item.authorNames,
              titlePlaceholder: "Publication Article Title",
              isHidden: item.isHidden
            }}
            InputCardProps={{
              itemType: "publication",
              visibilityHandler: {
                value: item.isHidden,
                setValue: () => updateData(index, "isHidden", !item.isHidden)
              },
              deleteHandler: () => handleDelete(item._id)
            }}
            key={item._id}
          >
            <InputWithLabel
              label="Article Title"
              name="articleTitle"
              placeholder="5G as Disruptive Technology."
              value={item.articleTitle}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Authors"
              name="authorNames"
              placeholder="[Last Name], [First Initial]"
              value={item.authorNames}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Journal"
              name="journalName"
              placeholder="Journal of Applied Technology"
              value={item.journalName}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <HStack>
              <InputWithLabel
                label="Volume Number"
                name="volumeNumber"
                value={item.volumeNumber}
                placeholder="86"
                onChange={(e) => handleChange(e, index, updateData)}
              />
              <InputWithLabel
                label="Issue Number"
                name="issueNumber"
                value={item.issueNumber}
                placeholder="5"
                onChange={(e) => handleChange(e, index, updateData)}
              />
            </HStack>
            <HStack>
              <InputWithLabel
                label="Year"
                name="year"
                value={item.year}
                placeholder="2015"
                onChange={(e) => handleChange(e, index, updateData)}
              />
              <InputWithLabel
                label="Pages"
                name="pages"
                value={item.pages}
                placeholder="118-25"
                onChange={(e) => handleChange(e, index, updateData)}
              />
            </HStack>
            <InputWithLabel
              label="DOI"
              name="doi"
              value={item.doi}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <FormatRadioGroup
              value={item.format}
              onChange={(value) => updateData(index, "format", value)}
            />
          </ExpandableCard>
        ))}
      </DndWrapper>
    </Section>
  );
};

export default Publications;
