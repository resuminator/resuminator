import React from "react";
import InputField from "../../../components/common/InputField";
import Section from "../../../components/layouts/Section";
import useContactStore from "./store";

const NameAndJobTitle = () => {
  const fullName = useContactStore((state) => state.fullName);
  const jobTitle = useContactStore((state) => state.jobTitle);
  const setProperty = useContactStore((state) => state.setProperty);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [key, value] = [e.target.name, e.target.value];
    setProperty(key, value);
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
