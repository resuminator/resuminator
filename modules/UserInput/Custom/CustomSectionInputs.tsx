import React, { Fragment } from "react";
import { DropResult } from "react-beautiful-dnd";
import { FiPlus } from "react-icons/fi";
import patchCustomSections from "../../../apis/patchCustomSection";
import EditorWithLabel from "../../../components/common/EditorWithLabel";
import InputWithLabel from "../../../components/common/InputWithLabel";
import StartEndDatePicker from "../../../components/common/StartEndDatePicker";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import ExpandableCard from "../../../components/layouts/Cards/ExpandableCard";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import { getUniqueID, truncateString } from "../../../utils";
import Autosave from "../Autosave";
import SectionControls from "../SectionControls";
import { useCustomSectionStore } from "./store";
import {
  CustomSectionDataObject,
  CustomSectionInputObject,
  CustomSectionObject,
  DateValue,
} from "./types";

const CustomSectionInputs = () => {
  const customSections = useCustomSectionStore((state) => state.sections);
  const updateSections = useCustomSectionStore((state) => state.updateSections);
  const addData = useCustomSectionStore((state) => state.addData);
  const deleteData = useCustomSectionStore((state) => state.deleteData);
  const updateData = useCustomSectionStore((state) => state.updateData);
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
        return { start: new Date(), end: new Date() };
    }
  };

  const getTypeFromId = (section: CustomSectionObject, fieldId: string) =>
    section.inputs.filter((dataItem) => dataItem._id === fieldId)[0].type;

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
    if (typeof firstField !== "string") return "";
    return truncateString(data.values[firstField].toString(), 40);
  };

  const getInputFieldComponent = (
    sectionId: string,
    dataItem: CustomSectionDataObject,
    field: CustomSectionInputObject
  ) => {
    switch (field.type) {
      case "TEXT":
        return (
          <InputWithLabel
            key={field._id}
            label={field.name}
            value={dataItem.values[field._id]}
            onChange={(e) =>
              updateData(sectionId, dataItem._id, field._id, e.target.value)
            }
          />
        );
      case "DATE": {
        const dateObj = dataItem.values[field._id];
        const { start, end } = dataItem.values[field._id];
        return (
          <StartEndDatePicker
            values={{ start, end }}
            onChangeHandler={(key) => (date) =>
              updateData(sectionId, dataItem._id, field._id, {
                ...(dateObj as DateValue),
                [key]: date,
              })}
            checkboxHandler={(e) =>
              updateData(sectionId, dataItem._id, field._id, {
                ...(dateObj as DateValue),
                end: dateObj.end === null ? new Date() : null,
              })
            }
          />
        );
      }
      case "DESC":
        return (
          <EditorWithLabel
            onChange={(output) =>
              updateData(sectionId, dataItem._id, field._id, output)
            }
            defaultValue={dataItem.values[field._id]}
            label="Description"
          />
        );
      default:
        return null;
    }
  };

  const handleDragEnd = (result: DropResult, section: CustomSectionObject) => {
    const { destination, source } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    const items = [...section.data];
    const [reorderedItem] = items.splice(source.index, 1);
    items.splice(destination.index, 0, reorderedItem);
    updateSections(section._id, "data", items);
  };

  return (
    <Fragment>
      <Autosave data={customSections} patchFn={patchCustomSections} />
      {customSections.map((section) => (
        <Section
          key={section.header}
          header={{
            title: section.header,
            mb: "2",
          }}
        >
          <SectionControls layoutKey={section.header.toUpperCase()}>
            <TooltipIconButton
              label={`Add new ${section.header.toLocaleLowerCase()}`}
              aria-label={`New-${section.header}`}
              icon={<FiPlus />}
              onClick={() => addData(section._id, createDataObject(section))}
            />
          </SectionControls>
          <DndWrapper
            droppableId={section.header.toLocaleLowerCase()}
            onDragEnd={(result) => handleDragEnd(result, section)}
          >
            {section.data.map((dataItem, index) => (
              <ExpandableCard
                DisplayCardProps={{
                  draggableId: dataItem._id,
                  index: index,
                  title: getCardTitle(dataItem),
                  titlePlaceholder: `New ${section.header.toLowerCase()}`,
                  isHidden: dataItem.isHidden,
                }}
                InputCardProps={{
                  itemType: section.header.toLowerCase(),
                  visibilityHandler: {
                    value: dataItem.isHidden,
                    setValue: () =>
                      toggleDataVisibility(section._id, dataItem._id),
                  },
                  deleteHandler: () => deleteData(section._id, dataItem._id),
                }}
                key={index}
              >
                {section.inputs.map((field) => (
                  <Fragment key={field._id}>
                    {getInputFieldComponent(section._id, dataItem, field)}
                  </Fragment>
                ))}
              </ExpandableCard>
            ))}
          </DndWrapper>
        </Section>
      ))}
    </Fragment>
  );
};

export default CustomSectionInputs;
