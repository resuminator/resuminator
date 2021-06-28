import React from "react";
import { FiPlus } from "react-icons/fi";
import InputWithLabel from "../../../components/common/InputWithLabel";
import TextAreaWithLabel from "../../../components/common/TextAreaWithLabel";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import ExpandableCard from "../../../components/layouts/Cards/ExpandableCard";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import { getUniqueID } from "../../../utils";
import { handleChange, handleDragEnd, handleTagsInput } from "../handlers";
import SectionControls from "../SectionControls";
import FormatMenu from "./FormatMenu";
import useSkillStore from "./store";
import { SkillDataObject } from "./types";

const Skills = () => {
  const data = useSkillStore((state) => state.data);
  const setData = useSkillStore((state) => state.setData);
  const addData = useSkillStore((state) => state.add);
  const updateData = useSkillStore((state) => state.update);

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
    console.log(`Deleted ${id}`);
  };

  return (
    <Section
      header={{
        title: "Skills",
        subtitle: "Add relevant skills and categorize them.",
        mb: "2",
      }}
    >
      <SectionControls layoutKey="SKILLS" extraChildren={<FormatMenu />}>
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
