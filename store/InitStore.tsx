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

import React, { useCallback, useEffect } from "react";
import { QueryStatus } from "react-query";
import { useCustomToast } from "../hooks/useCustomToast";
import useCertificationStore from "../modules/UserInput/Certification/store";
import useContactStore from "../modules/UserInput/Contact/store";
import { useCustomSectionStore } from "../modules/UserInput/Custom/store";
import useEducationStore from "../modules/UserInput/Education/store";
import useExperienceStore from "../modules/UserInput/Experience/store";
import useProjectStore from "../modules/UserInput/Projects/store";
import usePublicationStore from "../modules/UserInput/Publications/store";
import useSkillStore from "../modules/UserInput/Skills/store";
import useGlobalStore from "./global.store";
import useResumeStore from "./resume.store";
import { Result } from "./types";

interface Props {
  data: Result;
  status: QueryStatus;
  id?: string;
}

const InitStore: React.FC<Props> = ({ data, status, id = "" }) => {
  const educationInit = useEducationStore((state) => state.setData);
  const experienceInit = useExperienceStore((state) => state.setData);
  const certificationInit = useCertificationStore((state) => state.setData);
  const projectInit = useProjectStore((state) => state.setData);
  const publicationsInit = usePublicationStore((state) => state.setData);
  const { setData: setSkillsData, setFormat: setSkillsFormat } =
    useSkillStore();
  const setContactProperty = useContactStore((state) => state.setProperty);
  const customSectionInit = useCustomSectionStore((state) => state.setSections);
  const { setInit, setLoading } = useGlobalStore();
  const setProperty = useResumeStore((state) => state.setProperty);
  const { createToast } = useCustomToast();

  const initUserInfo = useCallback(
    (userInfo: Result["contact"]) => {
      setContactProperty("fullName", userInfo.fullName);
      setContactProperty("jobTitle", userInfo.jobTitle);
      setContactProperty("userImage", userInfo.userImage);
      setContactProperty("contact", userInfo.contact);
    },
    [setContactProperty]
  );

  const initSkills = useCallback(
    (skills: Result["skills"]) => {
      setSkillsData(skills.data);
      setSkillsFormat(skills.format);
    },
    [setSkillsData, setSkillsFormat]
  );

  const initResume = useCallback(
    (id: string) => {
      const object = data.template;
      if (!object) return;
      setProperty("_id", id);
      setProperty("properties", {
        inputs: object.inputs, //default
        layout: object.layout, //default
      });
      setProperty("fontProfile", object.fontProfile);
      setProperty("color", object.color);
      setProperty("spacing", object.spacing);
    },
    [setProperty, data.template]
  );

  const initApp = useCallback(
    (id: string, data: Result) => {
      educationInit(data.education);
      experienceInit(data.experience);
      certificationInit(data.certifications);
      projectInit(data.projects);
      publicationsInit(data.publications);
      initSkills(data.skills);
      initUserInfo(data.contact);
      customSectionInit(data.customSections);
      initResume(id);
      setInit(true);
    },
    [
      initResume,
      educationInit,
      experienceInit,
      certificationInit,
      projectInit,
      publicationsInit,
      initSkills,
      customSectionInit,
      setInit,
      initUserInfo,
    ]
  );

  if (status === "error")
    createToast(
      "Cannot connect to server.",
      "error",
      "Try checking your network connection while we try to reconnect.",
      "network-error",
      { variant: "subtle" }
    );

  if (status === "loading") setLoading(true);

  useEffect(() => {
    if (status === "success") {
      initApp(id, data);
      setLoading(false);
    }
  }, [id, data, initApp, status, setLoading]);

  return null;
};

export default InitStore;
