import React from "react";
import InputField from "../../../components/common/InputField";
import Section from "../../../components/layouts/Section";
import useContactStore from "./store";

const NameAndJobTitle = () => {
  const fullName = useContactStore((state) => state.fullName);
  const jobTitle = useContactStore((state) => state.jobTitle);
  const setFullName = useContactStore((state) => state.setFullName);
  const setJobTitle = useContactStore((state) => state.setJobTitle);

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
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <InputField
        labelProps={{ fontSize: "sm" }}
        label="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
      />
    </Section>
  );
};

export default NameAndJobTitle;
