import React from "react";
import InputField from "../../components/common/InputField";
import Section from "../../components/layouts/Section";

const NameAndJobTitle = () => {
  return (
    <Section
      header={{
        title: "Let's go over some basic info",
        subtitle: "Provide your name, email, and where to contact you",
      }}
    >
      <InputField labelProps={{ fontSize: "sm" }} label="Full Name" />
      <InputField labelProps={{ fontSize: "sm" }} label="Job Title" />
    </Section>
  );
};

export default NameAndJobTitle;
