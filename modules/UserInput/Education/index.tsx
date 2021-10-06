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

import { Icon, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { FiAlertTriangle, FiEyeOff, FiPlus } from "react-icons/fi";
import { patchEducation } from "../../../apis/patchSection";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import ExpandableCard from "../../../components/layouts/Cards/ExpandableCard";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import EducationHints from "../../../data/Hints/education";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { getUniqueID } from "../../../utils";
import Autosave from "../Autosave";
import {
  handleChange,
  handleDateChange,
  handleDragEnd,
  handleEditorChange,
  handlePresentCheckbox
} from "../handlers";
import SectionControls from "../SectionControls";
import GradeInput from "./GradeInput";
import useEducationStore from "./store";
import { EducationDataObject } from "./types";
const EditorWithLabel = dynamic(
  () => import("../../../components/common/EditorWithLabel")
);
const StartEndDatePicker = dynamic(
  () => import("../../../components/common/StartEndDatePicker")
);
const InputWithLabel = dynamic(
  () => import("../../../components/common/InputWithLabel")
);

const Education = () => {
  const data = useEducationStore((state) => state.data);
  const setData = useEducationStore((state) => state.setData);
  const addData = useEducationStore((state) => state.add);
  const updateData = useEducationStore((state) => state.update);
  const { createToast } = useCustomToast();

  //This will be removed when server is connected. For mock purposes only.
  const DummyData: EducationDataObject = {
    _id: getUniqueID(),
    isHidden: false,
    institute: "",
    location: "",
    degree: "",
    stream: "",
    gradeObtained: 1,
    gradeMax: 10,
    start: new Date(),
    end: new Date(),
    description: ""
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
        title: "Education",
        subtitle: "Where did you last attend college/school?",
        mb: "2"
      }}
    >
      <Autosave data={data} patchFn={patchEducation} />
      <SectionControls layoutKey="EDUCATION" hintData={EducationHints}>
        <TooltipIconButton
          label="Add new education"
          aria-label="New-Education"
          icon={<FiPlus />}
          onClick={handleAdd}
        />
      </SectionControls>
      <DndWrapper
        droppableId="education"
        onDragEnd={(result) => handleDragEnd(result, data, setData)}
      >
        {data.map((item, index) => (
          <ExpandableCard
            DisplayCardProps={{
              draggableId: item._id,
              index: index,
              title: item.institute,
              subtitle: item.degree,
              titlePlaceholder: "Institute Name",
              isHidden: item.isHidden
            }}
            InputCardProps={{
              itemType: "education",
              visibilityHandler: {
                value: item.isHidden,
                setValue: () => updateData(index, "isHidden", !item.isHidden)
              },
              deleteHandler: () => handleDelete(item._id)
            }}
            key={item._id}
            id={item._id}
          >
            <InputWithLabel
              label="Institute"
              name="institute"
              placeholder="Umbrella Academy"
              value={item.institute}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Location"
              name="location"
              placeholder="City, State"
              value={item.location}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Degree"
              name="degree"
              value={item.degree}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Stream"
              name="stream"
              value={item.stream}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <StartEndDatePicker
              views={["year"]}
              values={{ start: item.start, end: item.end }}
              onChangeHandler={(key) =>
                handleDateChange(index, key, updateData)
              }
              checkboxHandler={() =>
                handlePresentCheckbox(index, data[index].end, updateData)
              }
            />
            <GradeInput
              gradeObtained={item.gradeObtained}
              gradeMax={item.gradeMax}
              onChangeHandler={(key, value) => updateData(index, key, value)}
            />
            {isNaN(item.gradeObtained) ? (
              <Text fontSize="sm" color="red.500" mb="4">
                <Icon as={FiAlertTriangle} /> Set a valid number (&gt;0). Use 0
                to hide the grade.
              </Text>
            ) : null}
            {item.gradeObtained < 1 ? (
              <Text fontSize="sm" color="gray.500" mb="4">
                <Icon as={FiEyeOff} /> Grade Hidden
              </Text>
            ) : null}
            <EditorWithLabel
              onChange={(output) =>
                handleEditorChange(index, output, updateData)
              }
              defaultValue={item.description}
              label="Description"
            />
          </ExpandableCard>
        ))}
      </DndWrapper>
    </Section>
  );
};

export default Education;
