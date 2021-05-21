import React from "react";
import { FiPlus } from "react-icons/fi";
import InputWithLabel from "../../../components/common/InputWithLabel";
import StartEndDatePicker from "../../../components/common/StartEndDatePicker";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import { getUniqueID } from "../../../utils";
import ExpandableCard from "../ExpandableCard";
import SectionControls from "../SectionControls";
import useCertificationStore from "./store";
import { CertificationDataObject } from "./types";

const Certification = () => {
  const data = useCertificationStore((state) => state.data);
  const isDisabled = useCertificationStore((state) => state.isDisabled);
  const toggleDisabled = useCertificationStore((state) => state.toggleDisabled);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    e.preventDefault();
    const [key, value] = [e.target.name, e.target.value];
    updateData(index, key, value);
  };

  const handleDateChange = (index: number, key: string) => (date: Date) => {
    updateData(index, key, date);
  };

  const handleCheckbox = (index: number) => {
    if (data[index].end) return updateData(index, "end", null);
    else return updateData(index, "end", new Date());
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
      <DndWrapper id="certification" onDragEnd={() => console.log("something")}>
        {data.map((item, index) => (
          <ExpandableCard
            id={item._id}
            index={index}
            key={index}
            title={item.certificateName}
            subtitle={item.credentialNumber}
            cardPlaceholder="Certificate Name"
            type="certification"
            visibilityHandler={{
              value: item.isHidden,
              setValue: () => updateData(index, "isHidden", !item.isHidden),
            }}
            deleteHandler={() => handleDelete(item._id)}
          >
            <InputWithLabel
              label="Certificate Name"
              name="certificateName"
              placeholder="Certified Software Developer"
              value={item.certificateName}
              onChange={(e) => handleChange(e, index)}
            />
            <InputWithLabel
              label="Issuing Authority"
              name="authority"
              placeholder="Ex. Microsoft"
              value={item.authority}
              onChange={(e) => handleChange(e, index)}
            />
            <InputWithLabel
              label="Credential Number"
              name="credentialNumber"
              value={item.credentialNumber}
              onChange={(e) => handleChange(e, index)}
            />
            <StartEndDatePicker
              labels={{
                started: "Obtained",
                ended: "Expires",
                checkbox: "Never Expires",
              }}
              values={{ start: item.start, end: item.end }}
              onChangeHandler={(key) => handleDateChange(index, key)}
              checkboxHandler={() => handleCheckbox(index)}
            />
            <InputWithLabel
              label="Certificate Link"
              name="link"
              value={item.link}
              onChange={(e) => handleChange(e, index)}
            />
          </ExpandableCard>
        ))}
      </DndWrapper>
    </Section>
  );
};

export default Certification;
