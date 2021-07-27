import { IconButton } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box, HStack } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { patchColor } from "../../../apis/patchTemplate";
import ColorPicker from "../../../components/elements/ColorPicker";
import Section from "../../../components/layouts/Section";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { usePatchParams } from "../../../hooks/usePatchParams";
import useResumeStore from "../../../store/resume.store";
import { ColorProfiles, Result } from "../../../store/types";
import ColorModeWarning from "./ColorModeWarning";
import GrayscalePreviewCheckbox from "./GrayscalePreviewCheckbox";

export const profiles: Array<ColorProfiles> = [
  "blue",
  "purple",
  "teal",
  "pink",
  "yellow",
];

export const isCustom = (color: ColorProfiles) => !profiles.includes(color);

const ColorSelector = () => {
  const color = useResumeStore((state) => state.color);
  const setColorProfile = useResumeStore((state) => state.setColorProfile);
  const { token, resumeId } = usePatchParams();
  const { createToast } = useCustomToast();

  const handleSubmit = async (item: ColorProfiles) => {
    setColorProfile(item);
    return await patchColor(token, resumeId, { color: item })
      .then((res: Result) => {
        setColorProfile(res.template.color);
        return createToast("Resume color scheme updated", "success");
      })
      .catch(() =>
        createToast(
          "Couldn't update resume color scheme",
          "error",
          "Please try again in sometime"
        )
      );
  };

  return (
    <Section
      header={{
        title: "Colors",
        subtitle: "Choose one from below or enter a custom HEX",
        mb: "2",
      }}
    >
      <HStack my="4" spacing="4">
        {profiles.map((item) => (
          <IconButton
            aria-label={`color-${item}`}
            icon={item === color && <FaCheck />}
            key={item}
            isRound
            colorScheme={item}
            onClick={() => handleSubmit(item)}
            _focus={{ boxShadow: `0 0 2px 3px ${item}` }}
          />
        ))}
        <ColorPicker
          value={color}
          handler={setColorProfile}
          handleSubmit={() => handleSubmit(color)}
          isActive={isCustom(color)}
        />
      </HStack>
      <HStack mb="2">
        <GrayscalePreviewCheckbox />
        <Tooltip
          label="Check how your resume will look when printed in grayscale"
          aria-label="graysale tooltip"
        >
          <Box as="span" color="InactiveCaptionText" width="fit-content">
            <Icon as={FiInfo} />
          </Box>
        </Tooltip>
      </HStack>
      <ColorModeWarning />
    </Section>
  );
};

export default ColorSelector;
