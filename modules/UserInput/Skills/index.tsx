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
import { patchSkillData } from "../../../apis/patchSkills";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import ExpandableCard from "../../../components/layouts/Cards/ExpandableCard";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import SkillsHints from "../../../data/Hints/skills";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { getUniqueID } from "../../../utils";
import Autosave from "../Autosave";
import { handleChange, handleDragEnd, handleTagsInput } from "../handlers";
import SectionControls from "../SectionControls";
import FormatMenu from "./FormatMenu";
import useSkillStore from "./store";
import { SkillDataObject } from "./types";
const InputWithLabel = dynamic(
  () => import("../../../components/common/InputWithLabel")
);
const TextAreaWithLabel = dynamic(
  () => import("../../../components/common/TextAreaWithLabel")
);

const Skills = () => {
  const data = useSkillStore((state) => state.data);
  const setData = useSkillStore((state) => state.setData);
  const addData = useSkillStore((state) => state.add);
  const updateData = useSkillStore((state) => state.update);
  const { createToast } = useCustomToast();

  const DummyData: SkillDataObject = {
    _id: getUniqueID(),
    isHidden: false,
    category: "",
    skillsList: [],
  };

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
        title: "Skills",
        subtitle: "Add relevant skills and categorize them.",
        mb: "2",
      }}
    >
      <Autosave data={{ data: data }} patchFn={patchSkillData} />
      <SectionControls
        layoutKey="SKILLS"
        extraChildren={<FormatMenu />}
        hintData={SkillsHints}
      >
        <TooltipIconButton
          label="Add new skillset"
          aria-label="New-Skillset"
          icon={<FiPlus />}
          onClick={handleAdd}
        />
      </SectionControls>
      {/* Search Bar with Autocomplete. TO BE DONE WITH MATERIAL-UI */}
      {/* Switch for disabling auto skill classification. */}
      <DndWrapper
        droppableId="skills"
        onDragEnd={(result) => handleDragEnd(result, data, setData)}
      >
        {data.map((item, index) => (
          <ExpandableCard
            DisplayCardProps={{
              draggableId: item._id,
              index: index,
              title: item.category,
              titlePlaceholder: "Untitled category",
              isHidden: item.isHidden,
            }}
            InputCardProps={{
              itemType: "category",
              visibilityHandler: {
                value: item.isHidden,
                setValue: () => updateData(index, "isHidden", !item.isHidden),
              },
              deleteHandler: () => handleDelete(item._id),
            }}
            key={index}
          >
            <InputWithLabel
              label="Category"
              name="category"
              placeholder="Programming Languages"
              value={item.category}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <TextAreaWithLabel
              label="Skills"
              name="skillsList"
              placeholder="Separate skills by commas"
              value={item.skillsList.toString()}
              onChange={(e) =>
                handleTagsInput(e, index, updateData, "skillsList")
              }
            />
          </ExpandableCard>
        ))}
      </DndWrapper>
    </Section>
  );
};

export default Skills;
