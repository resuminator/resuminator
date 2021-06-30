import { useToast } from "@chakra-ui/toast";
import React, { useCallback, useEffect } from "react";
import { QueryStatus } from "react-query";
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
  const skillsInit = useSkillStore((state) => state.setData);
  const { setFullName, setContact, setJobTitle, setUserImage } =
    useContactStore();
  const customSectionInit = useCustomSectionStore((state) => state.setSections);
  const { setInit, setLoading } = useGlobalStore();
  const setProperty = useResumeStore((state) => state.setProperty);
  const toast = useToast();

  const initUserInfo = useCallback(
    (userInfo: Result["contact"]) => {
      setFullName(userInfo.fullName);
      setJobTitle(userInfo.jobTitle);
      setUserImage(userInfo.userImage);
      setContact(userInfo.contact);
    },
    [setContact, setFullName, setJobTitle, setUserImage]
  );

  const initResume = useCallback(
    (id: string) => {
      const object = data.resumes.filter((item) => item.id === id)[0];
      if (!object) return;
      setProperty("_id", object.id);
      setProperty("properties", {
        inputs: object.inputs, //default
        layout: object.layout, //default
      });
      setProperty("fontProfile", object.fontProfile);
      setProperty("color", object.color);
      setProperty("spacing", object.spacing);
      setProperty("profileName", object.profileName);
      setProperty("icon", object.icon);
    },
    [setProperty, data.resumes]
  );

  const initApp = useCallback(
    (id: string, data: Result) => {
      educationInit(data.education);
      experienceInit(data.experience);
      certificationInit(data.certifications);
      projectInit(data.projects);
      publicationsInit(data.publications);
      skillsInit(data.skills.data);
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
      skillsInit,
      customSectionInit,
      setInit,
      initUserInfo,
    ]
  );

  if (status === "error")
    toast({
      title: "Cannot connect to server.",
      variant: "subtle",
      description:
        "Try checking your network connection while we try to reconnect.",
      status: "error",
      duration: 3500,
      isClosable: true,
    });

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
