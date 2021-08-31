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

import dynamic from "next/dynamic";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { patchExperience } from "../../../apis/patchSection";
import InputWithLabel from "../../../components/common/InputWithLabel";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import ExpandableCard from "../../../components/layouts/Cards/ExpandableCard";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import ExperienceHints from "../../../data/Hints/experience";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { getUniqueID } from "../../../utils";
import Autosave from "../Autosave";
import {
  handleChange,
  handleDateChange,
  handleDragEnd,
  handleEditorChange,
  handlePresentCheckbox,
  handleTagsInput
} from "../handlers";
import SectionControls from "../SectionControls";
import useExperienceStore from "./store";
import { ExperienceDataObject } from "./types";
const EditorWithLabel = dynamic(
  () => import("../../../components/common/EditorWithLabel")
);
const StartEndDatePicker = dynamic(
  () => import("../../../components/common/StartEndDatePicker")
);

const Experience = () => {
  const data = useExperienceStore((state) => state.data);
  const setData = useExperienceStore((state) => state.setData);
  const addData = useExperienceStore((state) => state.add);
  const updateData = useExperienceStore((state) => state.update);
  const { createToast } = useCustomToast();

  //This will be removed when server is connected. For mock purposes only.
  const DummyData: ExperienceDataObject = {
    _id: getUniqueID(),
    jobTitle: "",
    company: "",
    location: "",
    description: "",
    link: "",
    tags: [],
    start: new Date(),
    end: new Date(),
    isHidden: false,
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
        title: "Work Experience",
        subtitle: "Add your recent work experiences and internships.",
        mb: "2",
      }}
    >
      <Autosave data={data} patchFn={patchExperience} />
      <SectionControls layoutKey="EXPERIENCE" hintData={ExperienceHints}>
        <TooltipIconButton
          label="Add new experience"
          aria-label="New-Experience"
          icon={<FiPlus />}
          onClick={handleAdd}
        />
      </SectionControls>
      <DndWrapper
        droppableId="experience"
        onDragEnd={(result) => handleDragEnd(result, data, setData)}
      >
        {data.map((item, index) => (
          <ExpandableCard
            DisplayCardProps={{
              draggableId: item._id,
              index: index,
              title: item.company,
              subtitle: item.jobTitle,
              titlePlaceholder: "Organization Name",
              isHidden: item.isHidden,
            }}
            InputCardProps={{
              itemType: "experience",
              visibilityHandler: {
                value: item.isHidden,
                setValue: () => updateData(index, "isHidden", !item.isHidden),
              },
              deleteHandler: () => handleDelete(item._id),
            }}
            key={index}
          >
            <InputWithLabel
              label="Job Title"
              name="jobTitle"
              placeholder="Rocket Scientist"
              value={item.jobTitle}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Organization"
              name="company"
              placeholder="Tesla"
              value={item.company}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Location"
              name="location"
              placeholder="City or Remote"
              value={item.location}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <EditorWithLabel
              onChange={(output) =>
                handleEditorChange(index, output, updateData)
              }
              defaultValue={item.description}
              label="Description"
            />
            <StartEndDatePicker
              values={{ start: item.start, end: item.end }}
              onChangeHandler={(key) =>
                handleDateChange(index, key, updateData)
              }
              checkboxHandler={() =>
                handlePresentCheckbox(index, data[index].end, updateData)
              }
            />
            <InputWithLabel
              label="Tags"
              name="tags"
              placeholder="Separate keywords by commas"
              value={item.tags.toString()}
              onChange={(e) => handleTagsInput(e, index, updateData)}
            />
            <InputWithLabel
              label="Link"
              name="link"
              value={item.link}
              onChange={(e) => handleChange(e, index, updateData)}
            />
          </ExpandableCard>
        ))}
      </DndWrapper>
    </Section>
  );
};

export default Experience;
