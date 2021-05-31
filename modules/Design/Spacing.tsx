import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/slider";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import Section from "../../components/layouts/Section";
import useResumeStore from "../../store/resume.store";

interface Props {}

const Spacing = (props: Props) => {
  const spacing = useResumeStore((state) => state.spacing);
  const setSpacing = useResumeStore((state) => state.setSpacing);

  const getTooltipLabel = (value: number) => {
    switch (value) {
      case 0.5:
        return "Compact";
      case 1:
        return "Normal";
      case 1.5:
        return "Airy";
      case 2:
        return "Large";
    }
  };

  return (
    <Section
      header={{
        title: "Resume spacing",
        subtitle: "Adjust the slider to increase/decrease white space.",
        mb: "2",
      }}
    >
      <Slider
        my="4"
        colorScheme="cyan"
        value={spacing}
        onChange={(value) => setSpacing(value)}
        w="60%"
        min={0.5}
        max={2}
        step={0.5}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip hasArrow label={getTooltipLabel(spacing)}>
          <SliderThumb bg="cyan.500" boxSize={6} />
        </Tooltip>
      </Slider>
    </Section>
  );
};

export default Spacing;
