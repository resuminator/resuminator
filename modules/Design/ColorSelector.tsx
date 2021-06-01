import { IconButton } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { FaCheck } from "react-icons/fa";
import ColorPicker from "../../components/elements/ColorPicker";
import Section from "../../components/layouts/Section";
import useResumeStore from "../../store/resume.store";
import { ColorProfiles } from "../../store/types";

interface Props {}

export const profiles: Array<ColorProfiles> = [
  "blue",
  "purple",
  "teal",
  "pink",
  "yellow",
];

export const isCustom = (color: ColorProfiles) => !profiles.includes(color);

const ColorSelector = (props: Props) => {
  const color = useResumeStore((state) => state.color);
  const setColorProfile = useResumeStore((state) => state.setColorProfile);

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
            onClick={() => setColorProfile(item)}
            _focus={{boxShadow: `0 0 2px 3px ${item}`}}
          />
        ))}
        <ColorPicker
          value={color}
          handler={setColorProfile}
          isActive={isCustom(color)}
        />
      </HStack>
    </Section>
  );
};

export default ColorSelector;
