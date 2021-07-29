import React, { Fragment } from "react";
import { DropResult } from "react-beautiful-dnd";
import { patchCustomSections } from "../../../apis/patchSection";
import EditorWithLabel from "../../../components/common/EditorWithLabel";
import InputWithLabel from "../../../components/common/InputWithLabel";
import StartEndDatePicker from "../../../components/common/StartEndDatePicker";
import ExpandableCard from "../../../components/layouts/Cards/ExpandableCard";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import { truncateString } from "../../../utils";
import Autosave from "../Autosave";
import CustomSectionControls from "./CustomSectionControls";
import { useCustomSectionStore } from "./store";
import {
  CustomSectionDataObject,
  CustomSectionInputObject,
  CustomSectionObject,
  DateValue
} from "./types";

type updateFn = (
  sectionId: string,
  id: string,
  key: string,
  value: any
) => void;

const getInputFieldComponent = (
  sectionId: string,
  dataItem: CustomSectionDataObject,
  field: CustomSectionInputObject,
  updateData: updateFn
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

const getCardTitle = (data: CustomSectionDataObject) => {
  const firstField = Object.keys(data.values)[0];
  if (typeof firstField !== "string") return "";
  return truncateString(data.values[firstField].toString(), 40);
};

const CustomSectionInputs = () => {
  const {
    sections: customSections,
    updateSections,
    deleteData,
    updateData,
    toggleDataVisibility,
  } = useCustomSectionStore();

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
          <CustomSectionControls section={section} />
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
                    {getInputFieldComponent(
                      section._id,
                      dataItem,
                      field,
                      updateData
                    )}
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
