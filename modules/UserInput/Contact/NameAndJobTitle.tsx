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

import React from "react";
import patchContact from "../../../apis/patchContact";
import InputField from "../../../components/common/InputField";
import Section from "../../../components/layouts/Section";
import { usePatchParams } from "../../../hooks/usePatchParams";
import useContactStore from "./store";

const NameAndJobTitle = () => {
  const fullName = useContactStore((state) => state.fullName);
  const jobTitle = useContactStore((state) => state.jobTitle);
  const setProperty = useContactStore((state) => state.setProperty);
  const { setSaveStatus, setLastSavedAt, resumeId, token, Status } =
    usePatchParams();

  const handleSubmit = async (key: string, value: any) => {
    const res = async () => {
      setSaveStatus(Status.loading);
      return await patchContact(key)(token, resumeId, { [key]: value })
        .then((res) => {
          setLastSavedAt(new Date(res.updatedAt));
          return setSaveStatus(Status.success);
        })
        .catch(() => setSaveStatus(Status.error));
    };

    const timeout = setTimeout(res, 3000);
    setSaveStatus(Status.idle);
    return () => clearTimeout(timeout);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [key, value] = [e.target.name, e.target.value];
    setProperty(key, value);
    handleSubmit(key, value);
  };

  return (
    <Section
      header={{
        title: "Let's go over some basic info",
        subtitle: "Provide your name, email, and where to contact you",
      }}
      flexDir="row"
      flexWrap="wrap"
    >
      <InputField
        labelProps={{ fontSize: "sm" }}
        label="Full Name"
        name="fullName"
        value={fullName}
        onChange={handleChange}
      />
      <InputField
        labelProps={{ fontSize: "sm" }}
        label="Job Title"
        name="jobTitle"
        value={jobTitle}
        onChange={handleChange}
      />
    </Section>
  );
};

export default NameAndJobTitle;
