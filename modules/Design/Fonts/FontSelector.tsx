import { Button } from "@chakra-ui/button";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import { patchFont } from "../../../apis/patchTemplate";
import Section from "../../../components/layouts/Section";
import { useCustomToast } from "../../../hooks/useCustomToast";
import { usePatchParams } from "../../../hooks/usePatchParams";
import useResumeStore from "../../../store/resume.store";
import { FontProfile, Result } from "../../../store/types";
import { toCamelCase } from "../../../utils";
import Fonts from "./legend";

const profiles: Array<FontProfile> = ["CLASSIC", "MAGAZINE", "POISE", "SENIOR"];

const FontSelector = () => {
  const fontProfile = useResumeStore((state) => state.fontProfile);
  const setFontProfile = useResumeStore((state) => state.setFontProfile);
  const { token, resumeId } = usePatchParams();
  const { createToast } = useCustomToast();

  const handleSubmit = async (item: FontProfile) => {
    setFontProfile(item);
    return await patchFont(token, resumeId, { fontProfile: item })
      .then((res: Result) => {
        setFontProfile(res.template.fontProfile);
        return createToast("Resume font updated", "success", null, "font-success");
      })
      .catch(() =>
        createToast(
          "Couldn't update resume font",
          "error",
          "Please try again in sometime",
          "font-error"
        )
      );
  };

  return (
    <Section
      header={{
        title: "Font & Feel",
        subtitle: "Select from the available fonts to change the feel",
        mb: "2",
      }}
    >
      <Menu>
        <MenuButton
          as={Button}
          width="60%"
          my="4"
          variant="outline"
          rightIcon={<FaChevronCircleDown />}
          fontFamily={Fonts[fontProfile].primary.fontFamily}
        >
          {toCamelCase(fontProfile)}
        </MenuButton>
        <MenuList>
          {profiles.map((item) => (
            <MenuItem
              key={item}
              fontFamily={Fonts[item].primary.fontFamily}
              onClick={() => handleSubmit(item)}
            >
              {toCamelCase(item)}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Section>
  );
};

export default FontSelector;
