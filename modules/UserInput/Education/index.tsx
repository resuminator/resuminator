import { Content } from "@tiptap/core";
import React from "react";
import { FiPlus } from "react-icons/fi";
import EditorWithLabel from "../../../components/common/EditorWithLabel";
import InputWithLabel from "../../../components/common/InputWithLabel";
import StartEndDatePicker from "../../../components/common/StartEndDatePicker";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import { getUniqueID } from "../../../utils";
import ExpandableCard from "../../../components/layouts/Cards/ExpandableCard";
import SectionControls from "../SectionControls";
import GradeInput from "./GradeInput";
import useEducationStore from "./store";
import { EducationDataObject } from "./types";
import { DropResult } from "react-beautiful-dnd";

const Education = () => {
  const data = useEducationStore((state) => state.data);
  const isDisabled = useEducationStore((state) => state.isDisabled);
  const toggleDisabled = useEducationStore((state) => state.toggleDisabled);
  const setData = useEducationStore((state) => state.setData);
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

  const handleCheckbox = (index: number) => {
    if (data[index].end) return updateData(index, "end", null);
    else return updateData(index, "end", new Date());
  };

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const items = [...data];
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);
    setData(items);
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
      <DndWrapper droppableId="education" onDragEnd={handleDragEnd}>
        {data.map((item, index) => (
          <ExpandableCard
            DisplayCardProps={{
              draggableId: item._id,
              index: index,
              title: item.institute,
              subtitle: item.degree,
              titlePlaceholder: "Institute Name",
            }}
            InputCardProps={{
              itemType: "education",
              visibilityHandler: {
                value: item.isHidden,
                setValue: () => updateData(index, "isHidden", !item.isHidden),
              },
              deleteHandler: () => handleDelete(item._id),
            }}
            key={item._id}
            id={item._id}
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
              checkboxHandler={() => handleCheckbox(index)}
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
      </DndWrapper>
    </Section>
  );
};

export default Education;
