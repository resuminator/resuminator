import React from "react";
import { FiPlus } from "react-icons/fi";
import InputWithLabel from "../../../components/common/InputWithLabel";
import TextAreaWithLabel from "../../../components/common/TextAreaWithLabel";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import Section from "../../../components/layouts/Section";
import { getUniqueID } from "../../../utils";
import ExpandableCard from "../ExpandableCard";
import SectionControls from "../SectionControls";
import FormatMenu from "./FormatMenu";
import useSkillStore from "./store";
import { SkillDataObject } from "./types";

interface Props {}

const Skills = () => {
  const data = useSkillStore((state) => state.data);
  const isDisabled = useSkillStore((state) => state.isDisabled);

  const toggleDisabled = useSkillStore((state) => state.toggleDisabled);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    e.preventDefault();
    const [key, value] = [e.target.name, e.target.value];
    updateData(index, key, value);
  };

  const handleTagsInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    const value = e.target.value;
    const skills = value !== "" ? value.split(",") : [];
    updateData(index, "skillsList", skills);
  };

  return (
    <Section
      header={{
        title: "Skills",
        subtitle: "Add relevant skills and categorize them.",
        mb: "2",
      }}
    >
      <SectionControls
        handler={{ isDisabled, toggleDisabled }}
        extraChildren={<FormatMenu />}
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
      {data.map((item, index) => (
        <ExpandableCard
          key={index}
          title={item.category}
          cardPlaceholder="New skill category"
          type="category"
          visibilityHandler={{
            value: item.isHidden,
            setValue: () => updateData(index, "isHidden", !item.isHidden),
          }}
          deleteHandler={() => handleDelete(item._id)}
        >
          <InputWithLabel
            label="Category"
            name="category"
            placeholder="Programming Languages"
            value={item.category}
            onChange={(e) => handleChange(e, index)}
          />
          <TextAreaWithLabel
            label="Skills"
            name="skillsList"
            placeholder="Separate skills by commas"
            value={item.skillsList.toString()}
            onChange={(e) => handleTagsInput(e, index)}
          />
        </ExpandableCard>
      ))}
    </Section>
  );
};

export default Skills;
