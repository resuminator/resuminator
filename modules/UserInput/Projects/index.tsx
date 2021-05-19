import { Content } from "@tiptap/core";
import React from "react";
import { FiPlus } from "react-icons/fi";
import EditorWithLabel from "../../../components/common/EditorWithLabel";
import InputWithLabel from "../../../components/common/InputWithLabel";
import StartEndDatePicker from "../../../components/common/StartEndDatePicker";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import Section from "../../../components/layouts/Section";
import { getUniqueID } from "../../../utils";
import ExpandableCard from "../ExpandableCard";
import SectionControls from "../SectionControls";
import useProjectStore from "./store";
import { ProjectDataObject } from "./types";

const Projects = () => {
  const data = useProjectStore((state) => state.data);
  const isDisabled = useProjectStore((state) => state.isDisabled);
  const toggleDisabled = useProjectStore((state) => state.toggleDisabled);
  const addData = useProjectStore((state) => state.add);
  const updateData = useProjectStore((state) => state.update);

  //This will be removed when server is connected. For mock purposes only.
  const DummyData: ProjectDataObject = {
    _id: getUniqueID(),
    isHidden: false,
    projectName: "",
    additionalInfo: "",
    start: new Date(),
    end: new Date(),
    description: "",
    link: "",
    tags: [],
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

  const handleEditorChange = (index: number, output: Content) => {
    updateData(index, "description", output);
  };

  const handleDateChange = (index: number, key: string) => (date: Date) => {
    updateData(index, key, date);
  };

  const handleCheckbox = (index: number) => {
    if(data[index].end) return updateData(index, "end", null);
    else return updateData(index, "end", new Date());
  }

  const handleTagsInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    const tags = value !== "" ? value.split(",") : [];
    updateData(index, "tags", tags);
  };

  return (
    <Section
      header={{
        title: "Projects",
        subtitle: "Add relevant personal projects",
        mb: "2",
      }}
    >
      <SectionControls handler={{ isDisabled, toggleDisabled }}>
        <TooltipIconButton
          label="Add new project"
          aria-label="New-Project"
          icon={<FiPlus />}
          onClick={handleAdd}
        />
      </SectionControls>
      {data.map((item, index) => (
        <ExpandableCard
          key={index}
          title={item.projectName}
          subtitle={item.link}
          cardPlaceholder="Project Name"
          type="project"
          visibilityHandler={{
            value: item.isHidden,
            setValue: () => updateData(index, "isHidden", !item.isHidden),
          }}
          deleteHandler={() => handleDelete(item._id)}
        >
          <InputWithLabel
            label="Project Name"
            name="projectName"
            placeholder="Resuminator"
            value={item.projectName}
            onChange={(e) => handleChange(e, index)}
          />
          <InputWithLabel
            label="Additional Info (Optional)"
            name="additionalInfo"
            placeholder="Ex. Organization"
            value={item.additionalInfo}
            onChange={(e) => handleChange(e, index)}
          />
          <StartEndDatePicker
            values={{ start: item.start, end: item.end }}
            onChangeHandler={(key) => handleDateChange(index, key)}
            checkboxHandler={() => handleCheckbox(index)}
          />
          <EditorWithLabel
            onChange={(output) => handleEditorChange(index, output)}
            defaultValue={item.description}
            label="Description"
          />
          <InputWithLabel
            label="Project Link"
            name="link"
            value={item.link}
            onChange={(e) => handleChange(e, index)}
          />
          <InputWithLabel
            label="Tags"
            name="tags"
            placeholder="Separate keywords by commas"
            value={item.tags.toString()}
            onChange={(e) => handleTagsInput(e, index)}
          />
        </ExpandableCard>
      ))}
    </Section>
  );
};

export default Projects;
