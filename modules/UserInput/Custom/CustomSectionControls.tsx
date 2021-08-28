import React from "react";
import { FiPlus } from "react-icons/fi";
import RemoveItemButton from "../../../components/common/RemoveItem";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { useDisabled } from "../../../hooks/useDisabled";
import useResumeStore from "../../../store/resume.store";
import { getUniqueID, toCamelCase } from "../../../utils";
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
  const layout = useResumeStore((state) => state.properties.layout);
  const { addData, sections, setSections } = useCustomSectionStore();
  const layoutKey = section.header.toUpperCase();
  const { handleLayoutUpdate } = useDisabled(layoutKey);
  const { createToast } = useCustomToast();

  const handleDelete = async (id: string) => {
    const { body } = layout;
    const nextBody = body.map((row) =>
      row.filter((item) => item !== layoutKey)
    );
    return await handleLayoutUpdate(
      nextBody,
      layoutKey,
      "Section Deleted Successfully"
    )
      .then(() => {
        const nextSections = sections.filter((item) => item._id !== id);
        setSections(nextSections);
      })
      .catch(() =>
        createToast(
          "Couldn't delete the section",
          "error",
          "Please try again in sometime"
        )
      );
  };

  return (
    <SectionControls
      hasHintsHidden
      layoutKey={section.header.toUpperCase()}
      extraChildren={
        <RemoveItemButton
          itemType={`${toCamelCase(section.header)} section`}
          handleDelete={() => handleDelete(section._id)}
        />
      }
    >
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
