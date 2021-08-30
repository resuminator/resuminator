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
import React from "react";
import { FiPlus } from "react-icons/fi";
import { patchCertifications } from "../../../apis/patchSection";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import ExpandableCard from "../../../components/layouts/Cards/ExpandableCard";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import CertificationHints from "../../../data/Hints/certification";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { getUniqueID } from "../../../utils";
import Autosave from "../Autosave";
import {
  handleChange,
  handleDateChange,
  handleDragEnd,
  handlePresentCheckbox
} from "../handlers";
import SectionControls from "../SectionControls";
import useCertificationStore from "./store";
import { CertificationDataObject } from "./types";
const StartEndDatePicker = dynamic(
  () => import("../../../components/common/StartEndDatePicker")
);
const InputWithLabel = dynamic(
  () => import("../../../components/common/InputWithLabel")
);

const Certification = () => {
  const data = useCertificationStore((state) => state.data);
  const setData = useCertificationStore((state) => state.setData);
  const addData = useCertificationStore((state) => state.add);
  const updateData = useCertificationStore((state) => state.update);
  const { createToast } = useCustomToast();

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
    const nextState = data.filter((item) => item._id !== id);
    setData(nextState);
    return createToast("Deleted Successfully", "success");
  };

  return (
    <Section
      header={{
        title: "Certifications",
        subtitle: "Add relevant professional certifications",
        mb: "2",
      }}
    >
      <Autosave data={data} patchFn={patchCertifications} />
      <SectionControls layoutKey="CERTIFICATIONS" hintData={CertificationHints}>
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
              isHidden: item.isHidden,
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
