import React from "react";
import { FiPlus } from "react-icons/fi";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import { getUniqueID } from "../../../utils";
import SectionControls from "../SectionControls";
import { useCustomSectionStore } from "./store";
import {
    CustomSectionDataObject,
    CustomSectionInputObject,
    CustomSectionObject
} from "./types";

interface CustomSectionControlsProps {
  section: CustomSectionObject;
}

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

const CustomSectionControls: React.FC<CustomSectionControlsProps> = ({
  section,
}) => {
  const { addData } = useCustomSectionStore();

  return (
    <SectionControls layoutKey={section.header.toUpperCase()}>
      <TooltipIconButton
        label={`Add new ${section.header.toLocaleLowerCase()}`}
        aria-label={`New-${section.header}`}
        icon={<FiPlus />}
        onClick={() => addData(section._id, createDataObject(section))}
      />
    </SectionControls>
  );
};

export default CustomSectionControls;
