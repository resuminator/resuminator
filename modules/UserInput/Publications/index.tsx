import { HStack } from "@chakra-ui/layout";
import React from "react";
import { FiPlus } from "react-icons/fi";
import InputWithLabel from "../../../components/common/InputWithLabel";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import { getUniqueID } from "../../../utils";
import ExpandableCard from "../ExpandableCard";
import SectionControls from "../SectionControls";
import FormatRadioGroup from "./FormatRadioGroup";
import usePublicationStore from "./store";
import { PublicationDataObject } from "./types";

const Publications = () => {
  const data = usePublicationStore((state) => state.data);
  const isDisabled = usePublicationStore((state) => state.isDisabled);
  const toggleDisabled = usePublicationStore((state) => state.toggleDisabled);
  const addData = usePublicationStore((state) => state.add);
  const updateData = usePublicationStore((state) => state.update);

  //This will be removed when server is connected. For mock purposes only.
  const DummyData: PublicationDataObject = {
    _id: getUniqueID(),
    isHidden: false,
    authorNames: "",
    journalName: "",
    articleTitle: "",
    volumeNumber: "",
    issueNumber: "",
    pages: "",
    year: null,
    format: "MLA",
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

  return (
    <Section
      header={{
        title: "Publications",
        subtitle: "Showcase your academic publications",
        mb: "2",
      }}
    >
      <SectionControls handler={{ isDisabled, toggleDisabled }}>
        <TooltipIconButton
          label="Add new publication"
          aria-label="New-Publication"
          icon={<FiPlus />}
          onClick={handleAdd}
        />
      </SectionControls>
      <DndWrapper id="publication" onDragEnd={() => console.log("YA")}>
        {data.map((item, index) => (
          <ExpandableCard
            id={item._id}
            index={index}
            key={index}
            title={item.articleTitle}
            subtitle={item.authorNames}
            cardPlaceholder="Publication Article Title"
            type="publication"
            visibilityHandler={{
              value: item.isHidden,
              setValue: () => updateData(index, "isHidden", !item.isHidden),
            }}
            deleteHandler={() => handleDelete(item._id)}
          >
            <InputWithLabel
              label="Article Title"
              name="articleTitle"
              placeholder="5G as Disruptive Technology."
              value={item.articleTitle}
              onChange={(e) => handleChange(e, index)}
            />
            <InputWithLabel
              label="Authors"
              name="authorNames"
              placeholder="[Last Name], [First Initial]"
              value={item.authorNames}
              onChange={(e) => handleChange(e, index)}
            />
            <InputWithLabel
              label="Journal"
              name="journalName"
              placeholder="Journal of Applied Technology"
              value={item.journalName}
              onChange={(e) => handleChange(e, index)}
            />
            <HStack>
              <InputWithLabel
                label="Volume Number"
                name="volumeNumber"
                value={item.volumeNumber}
                placeholder="86"
                onChange={(e) => handleChange(e, index)}
              />
              <InputWithLabel
                label="Issue Number"
                name="issueNumber"
                value={item.issueNumber}
                placeholder="5"
                onChange={(e) => handleChange(e, index)}
              />
            </HStack>
            <HStack>
              <InputWithLabel
                label="Year"
                name="year"
                value={item.year}
                placeholder="2015"
                onChange={(e) => handleChange(e, index)}
              />
              <InputWithLabel
                label="Pages"
                name="pages"
                value={item.pages}
                placeholder="118-25"
                onChange={(e) => handleChange(e, index)}
              />
            </HStack>
            <FormatRadioGroup
              value={item.format}
              onChange={(value) => updateData(index, "format", value)}
            />
          </ExpandableCard>
        ))}
      </DndWrapper>
    </Section>
  );
};

export default Publications;
