import { Content } from "@tiptap/core";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import create from "zustand";
import EditorWithLabel from "../../components/common/EditorWithLabel";
import InputWithLabel from "../../components/common/InputWithLabel";
import StartEndDatePicker from "../../components/common/StartEndDatePicker";
import TooltipIconButton from "../../components/common/TooltipIconButton";
import Section from "../../components/layouts/Section";
import { getUniqueID } from "../../utils";
import ExpandableCard from "./ExpandableCard";
import SectionControls, { SectionProperties } from "./SectionControls";

interface ExperienceDataObject {
  _id?: string;
  jobTitle?: string;
  company?: string;
  location?: string;
  description?: Content;
  link?: string;
  tags?: Array<string>;
  start?: Date;
  end?: Date;
  isHidden?: boolean;
}

type DataState = Array<ExperienceDataObject>;

interface ExperienceState {
  data: DataState;
  add: (obj: ExperienceDataObject) => void;
  update: (index: number, key: string, value: any) => void;
  toggleVisibility: (index: number) => void;
}

const updateArray = (
  array: DataState,
  index: number,
  obj: ExperienceDataObject
) => [...array.slice(0, index), obj, ...array.slice(index + 1)];

const useExperienceStore = create<ExperienceState>((set, get) => ({
  data: [],
  add: (obj) => set((state) => ({ data: [...state.data, obj] })),
  update: (index, key, value) => {
    const obj = { ...get().data[index], [key]: value };
    set((state) => ({ data: updateArray(state.data, index, obj) }));
  },
  toggleVisibility: (index) => {
    const obj = { ...get().data[index] };
    set((state) => ({
      data: updateArray(state.data, index, { ...obj, isHidden: !obj.isHidden }),
    }));
  },
}));

const Experience = () => {
  const [properties, setProperties] = useState<SectionProperties>({
    isHidden: false,
  });
  const data = useExperienceStore((state) => state.data);
  const addData = useExperienceStore((state) => state.add);
  const updateData = useExperienceStore((state) => state.update);
  const toggleVisibility = useExperienceStore((state) => state.toggleVisibility);

  const DummyData: ExperienceDataObject = {
    _id: getUniqueID(),
    jobTitle: "Student Developer @ CERN-HSF",
    company: "Google Summer of Code '20",
    location: "Remote",
    description: "<p>Testing Testing</p>",
    link: "",
    tags: ["GSoC", "React"],
    start: new Date(),
    end: new Date(),
    isHidden: false,
  };

  //mocking data from DB.
  const getNewObject = async () => {
    return DummyData;
  };

  const handleAdd = async () => {
    await getNewObject().then((res) => addData(res));
  };

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

  return (
    <Section
      header={{
        title: "Work Experience",
        subtitle: "Add your recent work experiences and internships.",
        mb: "2",
      }}
    >
      <SectionControls handler={{ properties, setProperties }}>
        <TooltipIconButton
          label="Add new experience"
          aria-label="New-Experience"
          icon={<FiPlus />}
          onClick={handleAdd}
        />
      </SectionControls>
      {data.map((item, index) => (
        <ExpandableCard
          key={index}
          title={item.company}
          subtitle={item.jobTitle}
          visibilityHandler={{
            value: item.isHidden,
            setValue: () => toggleVisibility(index),
          }}
          deleteHandler={() => handleDelete(item._id)}
        >
          <InputWithLabel
            label="Job Title"
            name="jobTitle"
            placeholder="Rocket Scientist"
            value={item.jobTitle}
            onChange={(e) => handleChange(e, index)}
          />
          <InputWithLabel
            label="Organization"
            name="company"
            placeholder="Tesla"
            value={item.company}
            onChange={(e) => handleChange(e, index)}
          />
          <InputWithLabel
            label="Location"
            name="location"
            placeholder="Start typing to search location"
            value={item.location}
            onChange={(e) => handleChange(e, index)}
          />
          <EditorWithLabel
            onChange={(output) => handleEditorChange(index, output)}
            defaultValue={item.description}
            label="Description"
          />
          <StartEndDatePicker
            values={{ start: item.start, end: item.end }}
            onChangeHandler={(key) => handleDateChange(index, key)}
          />
          <InputWithLabel
            label="Tags"
            name="tags"
            placeholder="Separate keywords by commas"
            value={item.tags}
            onChange={(e) => handleChange(e, index)}
          />
          <InputWithLabel
            label="Link"
            name="link"
            value={item.link}
            onChange={(e) => handleChange(e, index)}
          />
        </ExpandableCard>
      ))}
    </Section>
  );
};

export default Experience;
