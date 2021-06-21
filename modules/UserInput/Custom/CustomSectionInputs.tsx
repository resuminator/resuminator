import React, { Fragment } from "react";
import { FiPlus } from "react-icons/fi";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import ExpandableCard from "../../../components/layouts/Cards/ExpandableCard";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import { getUniqueID, truncateString } from "../../../utils";
import SectionControls from "../SectionControls";
import { useCustomSectionStore } from "./store";
import {
  CustomSectionDataObject,
  CustomSectionInputObject,
  CustomSectionObject
} from "./types";

const CustomSectionInputs = () => {
  const customSections = useCustomSectionStore((state) => state.sections);
  const addData = useCustomSectionStore((state) => state.addData);
  const deleteData = useCustomSectionStore((state) => state.deleteData);
  const toggleDataVisibility = useCustomSectionStore(
    (state) => state.toggleDataVisibility
  );

  const getDefaultValue = (type: CustomSectionInputObject["type"]) => {
    switch (type) {
      case "TEXT":
        return "";
      case "DESC":
        return "";
      case "DATE":
        return new Date();
    }
  };

  const getTypeFromId = (section: CustomSectionObject, fieldId: string) =>
    section.inputs.filter((item) => item._id === fieldId)[0].type;

  const createDataObject = (
    section: CustomSectionObject
  ): CustomSectionDataObject => {
    const fieldIds = section.inputs.map((field) => field._id);
    const values = fieldIds.reduce(
      (o, key) => ({
        ...o,
        [key]: getDefaultValue(getTypeFromId(section, key)),
      }),
      {}
    );

    return {
      _id: getUniqueID(),
      isHidden: false,
      values,
    };
  };

  const getCardTitle = (data: CustomSectionDataObject) => {
    const firstField = Object.keys(data.values)[0];
    return truncateString(data.values[firstField].toString(), 40);
  };

  return (
    <Fragment>
      {customSections.map((section) => (
        <Section
          key={section.header}
          header={{
            title: section.header,
            mb: "2",
          }}
        >
          <SectionControls>
            <TooltipIconButton
              label={`Add new ${section.header.toLocaleLowerCase()}`}
              aria-label={`New-${section.header}`}
              icon={<FiPlus />}
              onClick={() => addData(section._id, createDataObject(section))}
            />
          </SectionControls>
          <DndWrapper
            droppableId={section.header.toLocaleLowerCase()}
            onDragEnd={(result) => console.log(result)}
          >
            {section.data.map((item, index) => (
              <ExpandableCard
                DisplayCardProps={{
                  draggableId: item._id,
                  index: index,
                  title: getCardTitle(item),
                  titlePlaceholder: `New ${section.header.toLowerCase()}`,
                }}
                InputCardProps={{
                  itemType: "publication",
                  visibilityHandler: {
                    value: item.isHidden,
                    setValue: () => toggleDataVisibility(section._id, item._id),
                  },
                  deleteHandler: () => deleteData(section._id, item._id),
                }}
                key={index}
              ></ExpandableCard>
            ))}
          </DndWrapper>
        </Section>
      ))}
    </Fragment>
  );
};

export default CustomSectionInputs;
