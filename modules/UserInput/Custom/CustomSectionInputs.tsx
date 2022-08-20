/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import dynamic from "next/dynamic";
import React, { Fragment } from "react";
import { DropResult } from "react-beautiful-dnd";
import { patchCustomSections } from "../../../apis/patchSection";
import ExpandableCard from "../../../components/layouts/Cards/ExpandableCard";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import { getMidMonthDate, sanitizeHTML, truncateString } from "../../../utils";
import Autosave from "../Autosave";
import CustomSectionControls from "./CustomSectionControls";
import { useCustomSectionStore } from "./store";
import {
  CustomSectionDataObject,
  CustomSectionInputObject,
  CustomSectionObject,
  DateValue
} from "./types";
const EditorWithLabel = dynamic(
  () => import("../../../components/common/EditorWithLabel")
);
const StartEndDatePicker = dynamic(
  () => import("../../../components/common/StartEndDatePicker")
);
const InputWithLabel = dynamic(
  () => import("../../../components/common/InputWithLabel")
);

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
          onChangeHandler={(key) => (date) => {
            updateData(sectionId, dataItem._id, field._id, {
              ...(dateObj as DateValue),
              [key]: getMidMonthDate(date)
            })}
          }
          checkboxHandler={(e) =>
            updateData(sectionId, dataItem._id, field._id, {
              ...(dateObj as DateValue),
              end: dateObj.end === null ? getMidMonthDate() : null
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

  if (typeof data.values[firstField] !== "string") return "";

  const returnString = sanitizeHTML(data.values[firstField]);
  return truncateString(returnString, 40);
};

const CustomSectionInputs = () => {
  const {
    sections: customSections,
    updateSections,
    deleteData,
    updateData,
    toggleDataVisibility
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
            mb: "2"
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
                  isHidden: dataItem.isHidden
                }}
                InputCardProps={{
                  itemType: section.header.toLowerCase(),
                  visibilityHandler: {
                    value: dataItem.isHidden,
                    setValue: () =>
                      toggleDataVisibility(section._id, dataItem._id)
                  },
                  deleteHandler: () => deleteData(section._id, dataItem._id)
                }}
                key={dataItem._id}
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
