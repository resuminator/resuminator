import { Content } from "@tiptap/core";
import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import EditorWithLabel from "../../components/common/EditorWithLabel";
import InputWithLabel from "../../components/common/InputWithLabel";
import TooltipIconButton from "../../components/common/TooltipIconButton";
import Section from "../../components/layouts/Section";
import { getUniqueID } from "../../utils";
import MUIDatePicker, { TextField } from "../../widgets/DatePicker";
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

const Experience = () => {
  const [properties, setProperties] = useState<SectionProperties>({
    isHidden: false,
  });
  const [data, setData] = useState<DataState>([]);
  const [currentObject, setCurrentObject] = useState<ExperienceDataObject>();

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
    await getNewObject().then((res) => setData((data) => [...data, res]));
  };

  const handleDelete = async () => {
    console.log(`Deleted ${currentObject._id}`);
  };

  const toggleVisibilityOnResume = () => {
    setCurrentObject((nextCurrent) => ({
      ...nextCurrent,
      isHidden: !currentObject.isHidden,
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const [key, value] = [e.target.name, e.target.value];
    setCurrentObject((nextCurrent) => ({ ...nextCurrent, [key]: value }));
  };

  const handleEditorChange = (output: Content) => {
    setCurrentObject((nextCurrent) => ({
      ...nextCurrent,
      description: output,
    }));
  };

  const handleDateChange = (date: Date) => {
    setCurrentObject((nextCurrent) => ({
      ...nextCurrent,
      start: date,
    }));
  };

  useEffect(() => {
    setData((nextData) =>
      nextData.map((item) =>
        item._id === currentObject._id ? currentObject : item
      )
    );
  }, [currentObject]);

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
      {data.map((item) => (
        <ExpandableCard
          key={item._id}
          title={item.company}
          subtitle={item.jobTitle}
          visibilityHandler={{
            value: item.isHidden,
            setValue: () => toggleVisibilityOnResume(),
          }}
          deleteHandler={handleDelete}
          chainOnClick={() => setCurrentObject(item)}
        >
          <InputWithLabel
            label="Job Title"
            name="jobTitle"
            placeholder="Rocket Scientist"
            value={item.jobTitle}
            onChange={handleChange}
          />
          <InputWithLabel
            label="Organization"
            name="company"
            placeholder="Tesla"
            value={item.company}
            onChange={handleChange}
          />
          <InputWithLabel
            label="Location"
            name="location"
            placeholder="Start typing to search location"
            value={item.location}
            onChange={handleChange}
          />
          <EditorWithLabel
            onChange={handleEditorChange}
            defaultValue={item.description}
            label="Description"
          />
          <MUIDatePicker
            renderInput={({ helperText, label, ...params }) => (
              <TextField label={null} {...params} />
            )}
            label="Started"
            value={item.start}
            onChange={handleDateChange}
            views={["year", "month"]}
          />
          <InputWithLabel
            label="Tags"
            name="tags"
            placeholder="Separate keywords by commas"
            value={item.tags}
            onChange={handleChange}
          />
          <InputWithLabel
            label="Link"
            name="link"
            value={item.link}
            onChange={handleChange}
          />
        </ExpandableCard>
      ))}
    </Section>
  );
};

export default Experience;
