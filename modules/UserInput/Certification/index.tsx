import React from "react";
import { FiPlus } from "react-icons/fi";
import InputWithLabel from "../../../components/common/InputWithLabel";
import StartEndDatePicker from "../../../components/common/StartEndDatePicker";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import ExpandableCard from "../../../components/layouts/Cards/ExpandableCard";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import { useDisabled } from "../../../hooks/useDisabled";
import { getUniqueID } from "../../../utils";
import {
  handleChange,
  handleDateChange,
  handleDragEnd,
  handlePresentCheckbox
} from "../handlers";
import SectionControls from "../SectionControls";
import useCertificationStore from "./store";
import { CertificationDataObject } from "./types";

const Certification = () => {
  const data = useCertificationStore((state) => state.data);
  const { isDisabled, toggleDisabled } = useDisabled("CERTIFICATIONS");
  const setData = useCertificationStore((state) => state.setData);
  const addData = useCertificationStore((state) => state.add);
  const updateData = useCertificationStore((state) => state.update);

  //This will be removed when server is connected. For mock purposes only.
  const DummyData: CertificationDataObject = {
    _id: getUniqueID(),
    isHidden: false,
    certificateName: "",
    authority: "",
    credentialNumber: "",
    start: new Date(),
    end: new Date(),
    link: "",
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

  return (
    <Section
      header={{
        title: "Certifications",
        subtitle: "Add relevant professional certifications",
        mb: "2",
      }}
    >
      <SectionControls handler={{ isDisabled, toggleDisabled }}>
        <TooltipIconButton
          label="Add new certificate"
          aria-label="New-Certificate"
          icon={<FiPlus />}
          onClick={handleAdd}
        />
      </SectionControls>
      <DndWrapper
        droppableId="certification"
        onDragEnd={(result) => handleDragEnd(result, data, setData)}
      >
        {data.map((item, index) => (
          <ExpandableCard
            DisplayCardProps={{
              draggableId: item._id,
              index: index,
              title: item.certificateName,
              subtitle: item.credentialNumber,
              titlePlaceholder: "Certificate Name",
            }}
            InputCardProps={{
              itemType: "certification",
              visibilityHandler: {
                value: item.isHidden,
                setValue: () => updateData(index, "isHidden", !item.isHidden),
              },
              deleteHandler: () => handleDelete(item._id),
            }}
            key={index}
          >
            <InputWithLabel
              label="Certificate Name"
              name="certificateName"
              placeholder="Certified Software Developer"
              value={item.certificateName}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Issuing Authority"
              name="authority"
              placeholder="Ex. Microsoft"
              value={item.authority}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <InputWithLabel
              label="Credential Number"
              name="credentialNumber"
              value={item.credentialNumber}
              onChange={(e) => handleChange(e, index, updateData)}
            />
            <StartEndDatePicker
              labels={{
                started: "Obtained",
                ended: "Expires",
                checkbox: "Never Expires",
              }}
              values={{ start: item.start, end: item.end }}
              onChangeHandler={(key) =>
                handleDateChange(index, key, updateData)
              }
              checkboxHandler={() =>
                handlePresentCheckbox(index, data[index].end, updateData)
              }
            />
            <InputWithLabel
              label="Certificate Link"
              name="link"
              value={item.link}
              onChange={(e) => handleChange(e, index, updateData)}
            />
          </ExpandableCard>
        ))}
      </DndWrapper>
    </Section>
  );
};

export default Certification;
