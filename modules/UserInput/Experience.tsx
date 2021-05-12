import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import EditorWithLabel from "../../components/common/EditorWithLabel";
import InputWithLabel from "../../components/common/InputWithLabel";
import TooltipIconButton from "../../components/common/TooltipIconButton";
import Section from "../../components/layouts/Section";
import { useTiptap } from "../../plugins/Tiptap";
import ExpandableCard from "./ExpandableCard";
import SectionControls, { SectionProperties } from "./SectionControls";

interface ExperienceDataObject {
  _id?: string;
  jobTitle?: string;
  company?: string;
  location?: string;
  description?: string;
  link?: string;
  tags?: Array<string>;
  start?: Date;
  end?: Date;
  isHidden?: boolean;
}

interface DataObject extends ExperienceDataObject {
  isExpanded?: boolean;
}

type DataState = Array<DataObject>;

const DummyData = {
  _id: "kasjdfw098hjkaf893nr0",
  jobTitle: "Student Developer @ CERN-HSF",
  company: "Google Summer of Code '20",
  location: "Remote",
  description: "<p>Testing Testing</p>",
  link: "",
  tags: ["GSoC", "React"],
  start: new Date(),
  end: new Date(),
  isHidden: false,
  isExpanded: true,
};

const Experience = () => {
  const [properties, setProperties] = useState<SectionProperties>({
    isHidden: false,
  });
  const [data, setData] = useState<DataState>([]);
  const { editor, output } = useTiptap("", {
    outputFormat: "HTML",
    placeholder: "Describe your role and achievements...",
  });

  const handleAdd = () => {
    setData([...data, DummyData]);
    editor.commands.setContent(DummyData.description);
  };

  useEffect(() => {
    console.log(output);
  }, [output]);

  const toggleExpand = (id: string) => {
    const current: DataObject = data.filter((item) => item._id === id)[0];
    const nextCurrent: DataObject = {
      ...current,
      isExpanded: !current.isExpanded,
    };
    setData(data.map((item) => (item._id === id ? nextCurrent : item)));
  };

  const toggleVisibilityOnResume = (id: string) => {
    const current: DataObject = data.filter((item) => item._id === id)[0];
    const nextCurrent: DataObject = { ...current, isHidden: !current.isHidden };
    setData(data.map((item) => (item._id === id ? nextCurrent : item)));
  };

  const handleChange = (e, id: string) => {
    e.preventDefault();
    const [key, value] = [e.target.name, e.target.value];
    const current: DataObject = data.filter((item) => item._id === id)[0];
    const nextCurrent: DataObject = { ...current, [key]: value };
    setData(data.map((item) => (item._id === id ? nextCurrent : item)));
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
      {data.map((item) => (
        <ExpandableCard
          key={item._id}
          title={item.company}
          subtitle={item.jobTitle}
          expandHandler={{
            value: item.isExpanded,
            setValue: () => toggleExpand(item._id),
          }}
          visibilityHandler={{
            value: item.isHidden,
            setValue: () => toggleVisibilityOnResume(item._id),
          }}
        >
          <InputWithLabel
            label="Job Title"
            name="jobTitle"
            placeholder="Rocket Scientist"
            value={item.jobTitle}
            onChange={(e) => handleChange(e, item._id)}
          />
          <InputWithLabel
            label="Organization"
            name="jobTitle"
            placeholder="Tesla"
            value={item.company}
            onChange={(e) => handleChange(e, item._id)}
          />
          <InputWithLabel
            label="Location"
            name="location"
            placeholder="Start typing to search location"
            value={item.location}
            onChange={(e) => handleChange(e, item._id)}
          />
          <EditorWithLabel label="Description" editor={editor} />
          <InputWithLabel
            label="Tags"
            name="tags"
            placeholder="Separate keywords by commas"
            value={item.tags}
            onChange={(e) => handleChange(e, item._id)}
          />
          <InputWithLabel
            label="Link"
            name="link"
            value={item.link}
            onChange={(e) => handleChange(e, item._id)}
          />
        </ExpandableCard>
      ))}
    </Section>
  );
};

export default Experience;
