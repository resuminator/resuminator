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
import GradeInput from "./GradeInput";
import useEducationStore from "./store";
import { EducationDataObject } from "./types";

const Education = () => {
  const data = useEducationStore((state) => state.data);
  const isDisabled = useEducationStore((state) => state.isDisabled);
  const toggleDisabled = useEducationStore((state) => state.toggleDisabled);
  const addData = useEducationStore((state) => state.add);
  const updateData = useEducationStore((state) => state.update);

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
    description: "",
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

  return (
    <Section
      header={{
        title: "Education",
        subtitle: "Where did you last attend college/school?",
        mb: "2",
      }}
    >
      <SectionControls handler={{ isDisabled, toggleDisabled }}>
        <TooltipIconButton
          label="Add new education"
          aria-label="New-Education"
          icon={<FiPlus />}
          onClick={handleAdd}
        />
      </SectionControls>
      {data.map((item, index) => (
        <ExpandableCard
          key={index}
          title={item.institute}
          subtitle={item.degree}
          cardPlaceholder="Your institute"
          type="education"
          visibilityHandler={{
            value: item.isHidden,
            setValue: () => updateData(index, "isHidden", !item.isHidden),
          }}
          deleteHandler={() => handleDelete(item._id)}
        >
          <InputWithLabel
            label="Institute"
            name="institute"
            placeholder="Umbrella Academy"
            value={item.institute}
            onChange={(e) => handleChange(e, index)}
          />
          <InputWithLabel
            label="Location"
            name="location"
            placeholder="Start typing to search location"
            value={item.location}
            onChange={(e) => handleChange(e, index)}
          />
          <InputWithLabel
            label="Degree"
            name="degree"
            value={item.degree}
            onChange={(e) => handleChange(e, index)}
          />
          <InputWithLabel
            label="Stream"
            name="stream"
            value={item.stream}
            onChange={(e) => handleChange(e, index)}
          />
          <StartEndDatePicker
            views={["year"]}
            values={{ start: item.start, end: item.end }}
            onChangeHandler={(key) => handleDateChange(index, key)}
          />
          <GradeInput
            gradeObtained={item.gradeObtained}
            gradeMax={item.gradeMax}
            onChangeHandler={(key, value) => updateData(index, key, value)}
          />
          <EditorWithLabel
            onChange={(output) => handleEditorChange(index, output)}
            defaultValue={item.description}
            label="Description"
          />
        </ExpandableCard>
      ))}
    </Section>
  );
};

export default Education;
