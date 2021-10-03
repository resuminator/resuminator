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

import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { GrDrag } from "react-icons/gr";
import patchContact from "../../../apis/patchContact";
import DndWrapper from "../../../components/layouts/DndWrapper";
import Section from "../../../components/layouts/Section";
import ContactHints from "../../../data/Hints/contact";
import { useCustomToast } from "../../../hooks/useCustomToast";
import Autosave from "../Autosave";
import { handleDragEnd } from "../handlers";
import SectionControls from "../SectionControls";
import { getColorSchemeForService, getIconForService } from "./helpers";
import ItemMenu from "./ItemMenu";
import SocialMediaMenu from "./SocialMediaMenu";
import useContactStore from "./store";
import { ContactDataObject } from "./types";

const SocialHandles: Record<string, string> = {
  LinkedIn: "(https://www.)?linkedin.com/in/([A-z0-9_-]+)/?",
  Twitter: "(https://www.)?twitter.com/([A-z0-9_-]+)/?",
  GitHub: "(https://www.)?github.com/([A-z0-9_-]+)/?",
  GitLab: "(https://www.)?githlab.com/([A-z0-9_-]+)/?",
  Email: "",
  Phone: "",
  Portfolio: "(https://)?([\\w+]+)/?",
  Behance: "(https://www.)?behance.com/([A-z0-9_-]+)/?",
  Dribbble: "(https://www.)?dribbble.com/([A-z0-9_-]+)/?",
  YouTube: "(https://www.)?youtube.com/([A-z0-9_-]+)/?",
};

const Contact = () => {
  const data = useContactStore((state) => state.contact);
  const setProperty = useContactStore((state) => state.setProperty);
  const update = useContactStore((state) => state.update);
  const add = useContactStore((state) => state.add);
  const set = (state: Array<ContactDataObject>) =>
    setProperty("contact", state);
  const { createToast } = useCustomToast();

  const handleDelete = (itemIndex: number) => {
    const nextState = data.filter((item, index) => index !== itemIndex);
    set(nextState);
    return createToast("Deleted Successfully", "success");
  };

  //Partially applied patchContact function for Autosave
  const patchFn = patchContact("contact");

  return (
    <Section
      header={{
        title: "Where can people contact you",
        subtitle: "Select the service and enter your social handle",
        mb: "2",
      }}
    >
      <Autosave data={{ contact: data }} patchFn={patchFn} />
      <SectionControls hasToggleButton={false} hintData={ContactHints}>
        <SocialMediaMenu handler={{ data, add }} />
      </SectionControls>

      <DndWrapper
        onDragEnd={(res) => handleDragEnd(res, data, set)}
        droppableId="social"
      >
        {/* Displaying user handles */}
        {data.map((item, index) => (
          <Draggable key={item.label} draggableId={item.label} index={index}>
            {(provided) => (
              <HStack
                mb="2"
                {...provided.draggableProps}
                ref={provided.innerRef}
              >
                <InputGroup flexBasis="80%">
                  <InputLeftElement>
                    <Icon
                      as={getIconForService(item.label)}
                      color={getColorSchemeForService(item.label)}
                    />
                  </InputLeftElement>
                  <Input
                    variant="filled"
                    value={item.link}
                    isDisabled={item.isHidden}
                    fontSize="sm"
                    onChange={(e) => update(index, "link", e.target.value)}
                    onBlur={() => {
                      const regexText = SocialHandles[item.label];
                      if (!regexText) return;
                      const regex = new RegExp(regexText || "//", "i");
                      const username = item.link?.match(regex)?.[2];
                      if (!username) return;
                      update(index, "link", username);
                    }}
                  />
                </InputGroup>
                <ItemMenu
                  item={item}
                  index={index}
                  handlers={{
                    hide: (index) => update(index, "isHidden", !item.isHidden),
                    remove: handleDelete,
                    update,
                  }}
                />
                <Box
                  transition="all 0.2s"
                  opacity="0.2"
                  _hover={{ opacity: "0.8" }}
                  {...provided.dragHandleProps}
                >
                  <Icon as={GrDrag} mt="1.5" />
                </Box>
              </HStack>
            )}
          </Draggable>
        ))}
      </DndWrapper>
    </Section>
  );
};

export default Contact;
