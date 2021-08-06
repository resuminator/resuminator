import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/slider";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import { patchSpacing } from "../../apis/patchTemplate";
import Section from "../../components/layouts/Section";
import { useCustomToast } from "../../hooks/useCustomToast";
import { usePatchParams } from "../../hooks/usePatchParams";
import useResumeStore from "../../store/resume.store";
import { Result } from "../../store/types";

interface Props {}

const Spacing = (props: Props) => {
  const spacing = useResumeStore((state) => state.spacing);
  const setSpacing = useResumeStore((state) => state.setSpacing);
  const { token, resumeId } = usePatchParams();
  const { createToast } = useCustomToast();

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

  const handleSubmit = (value: number) => {
    setSpacing(value);

    const res = async () =>
      await patchSpacing(token, resumeId, { spacing: value })
        .then((res: Result) => {
          setSpacing(res.template.spacing);
          return createToast("Resume spacing updated", "success");
        })
        .catch(() =>
          createToast(
            "Couldn't update resume spacing",
            "error",
            "Please try again in sometime"
          )
        );

    const timeout = setTimeout(res, 3000);
    return () => clearTimeout(timeout);
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
        onChange={(value) => handleSubmit(value)}
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
