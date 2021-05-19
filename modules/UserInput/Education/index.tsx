import React from "react";
import { FiPlus } from "react-icons/fi";
import TooltipIconButton from "../../../components/common/TooltipIconButton";
import Section from "../../../components/layouts/Section";
import SectionControls from "../SectionControls";
import useEducationStore from "./store";

interface Props {}

const Education = (props: Props) => {
  const isDisabled = useEducationStore((state) => state.isDisabled);
  const toggleDisabled = useEducationStore((state) => state.toggleDisabled);
  return (
    <Section
      header={{
        title: "Education",
        subtitle: "Where did you last attend college/school?",
        mb: "2",
      }}
    >
      <SectionControls handler={{ isDisabled, toggleDisabled }}>
        <TooltipIconButton
          label="Add new experience"
          aria-label="New-Experience"
          icon={<FiPlus />}
        />
      </SectionControls>
    </Section>
  );
};

export default Education;
