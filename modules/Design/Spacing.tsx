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

import { SliderMark } from "@chakra-ui/react";
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack
} from "@chakra-ui/slider";
import React from "react";
import { patchSpacing } from "../../apis/patchTemplate";
import Section from "../../components/layouts/Section";
import { useCustomToast } from "../../hooks/useCustomToast";
import { usePatchParams } from "../../hooks/usePatchParams";
import useResumeStore from "../../store/resume.store";
import { Result } from "../../store/types";

const Marker = ({ value, index }) => {
  const display = ["Compact", "Normal", "Airy", "Large"];
  return (
    <SliderMark fontSize="xs" color="gray" value={value} top="1.5rem">
      {display[index]}
    </SliderMark>
  );
};

const Spacing = () => {
  const spacing = useResumeStore((state) => state.spacing);
  const setSpacing = useResumeStore((state) => state.setSpacing);
  const { token, resumeId } = usePatchParams();
  const { createToast } = useCustomToast();

  const handleSubmit = async (value: number) => {
    setSpacing(value);

    return await patchSpacing(token, resumeId, { spacing: value })
      .then((res: Result) => {
        setSpacing(res.template.spacing);
        return createToast(
          "Resume spacing updated",
          "success",
          null,
          "spacing-success"
        );
      })
      .catch(() =>
        createToast(
          "Couldn't update resume spacing",
          "error",
          "Please try again in sometime",
          "spacing-error"
        )
      );
  };

  return (
    <Section
      header={{
        title: "Resume spacing",
        subtitle: "Adjust the slider to increase/decrease white space.",
        mb: "2"
      }}
    >
      <Slider
        my="4"
        colorScheme="cyan"
        value={spacing}
        onChange={(value) => handleSubmit(value)}
        w="80%"
        min={0.5}
        max={2}
        step={0.5}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        {[0.45, 0.91, 1.45, 1.86].map((markValue, index) => (
          <Marker key={markValue} value={markValue} index={index} />
        ))}
        <SliderThumb bg="cyan.500" boxSize={6} mb="2" />
      </Slider>
    </Section>
  );
};

export default Spacing;
