import { IconButton } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";
import React from "react";
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

export const isCustom = (color) => !profiles.includes(color);

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
            key={item}
            isRound
            colorScheme={item}
            boxShadow={item === color && `0px 0px 0 4px ${item}`}
            onClick={() => setColorProfile(item)}
          />
        ))}
        <ColorPicker
          value={color}
          handler={setColorProfile}
          color="gray.600"
          boxShadow={isCustom(color) && `0 0 0 4px ${color}`}
          variant={isCustom(color) ? "solid" : "outline"}
          onClick={() => {
            !isCustom(color) && setColorProfile("#");
          }}
        />
      </HStack>
    </Section>
  );
};

export default ColorSelector;
