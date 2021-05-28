import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import React, { useCallback, useEffect } from "react";
import { useQuery } from "react-query";
import API_URL from "../config/server";
import useCertificationStore from "../modules/UserInput/Certification/store";
import useEducationStore from "../modules/UserInput/Education/store";
import useExperienceStore from "../modules/UserInput/Experience/store";
import useProjectStore from "../modules/UserInput/Projects/store";
import usePublicationStore from "../modules/UserInput/Publications/store";
import useSkillStore from "../modules/UserInput/Skills/store";
import { Result } from "./types";

const StoreContext = React.createContext<Result>({});

const getResumeData = async () => {
  const res = await axios.get(`${API_URL}/resume`);
  return res.data;
};

const StoreProvider: React.FC = ({ children }) => {
  const { data, isError, isSuccess } = useQuery("getResumeData", getResumeData);
  const educationInit = useEducationStore((state) => state.setData);
  const experienceInit = useExperienceStore((state) => state.setData);
  const certificationInit = useCertificationStore((state) => state.setData);
  const projectInit = useProjectStore((state) => state.setData);
  const publicationsInit = usePublicationStore((state) => state.setData);
  const skillsInit = useSkillStore((state) => state.setData);
  const toast = useToast();

  const initApp = useCallback(
    (data: Result) => {
      educationInit(data.education);
      experienceInit(data.experience);
      certificationInit(data.certifications);
      projectInit(data.projects);
      publicationsInit(data.publications);
      skillsInit(data.skills.data);
    },
    [
      educationInit,
      experienceInit,
      certificationInit,
      projectInit,
      publicationsInit,
      skillsInit,
    ]
  );

  if (isError)
    toast({
      title: "Cannot connect to server.",
      variant: "subtle",
      description:
        "Try checking your network connection. If you continue to face this error, contact us.",
      status: "error",
      duration: 3500,
      isClosable: true,
    });

  useEffect(() => {
    if (isSuccess) {
      initApp(data);
    }
  }, [data, initApp, isSuccess]);

  return (
    <StoreContext.Provider value={data.resumes}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
