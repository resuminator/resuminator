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
import { useCustomToast } from "../../../hooks/useCustomToast";
import Autosave from "../Autosave";
import { handleDragEnd } from "../handlers";
import SectionControls from "../SectionControls";
import { getColorSchemeForService, getIconForService } from "./helpers";
import ItemMenu from "./ItemMenu";
import SocialMediaMenu from "./SocialMediaMenu";
import useContactStore from "./store";
import { ContactDataObject } from "./types";

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
      <SectionControls hasToggleButton={false}>
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
