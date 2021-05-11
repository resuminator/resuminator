import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import Section from "../../components/layouts/Section";
import SocialMediaMenu from "../SocialMedia";
import { getColorSchemeForService } from "../SocialMedia/helpers";
import { SocialHandleObject } from "../SocialMedia/types";
import ItemMenu from "./ItemMenu";
import SectionControls, { SectionProperties } from "./SectionControls";

export interface DataObject extends SocialHandleObject {
  isHidden?: boolean;
}

const Contact = () => {
  const [properties, setProperties] = useState<SectionProperties>({
    isHidden: false,
  });
  const [data, setData] = useState<Array<DataObject>>([]);

  const handleDelete = (index: number) => {
    const preList = data.slice(0, index);
    const postList = data.slice(index + 1);
    setData([...preList, ...postList]);
  };

  const handleHide = (index: number) => {
    const current: DataObject = data[index];
    const nextCurrent = { ...current, isHidden: !current.isHidden };
    const preList = data.slice(0, index);
    const postList = data.slice(index + 1);
    setData([...preList, nextCurrent, ...postList]);
  };

  return (
    <Section
      header={{
        title: "Where can people contact you",
        subtitle: "Select the service and enter your social handle",
        mb: "2",
      }}
    >
      <SectionControls handler={{ properties, setProperties }}>
        <SocialMediaMenu handler={{ data, setData }} />
      </SectionControls>

      {/* Displaying user handles */}
      {data.map((item, index) => (
        <HStack key={item.label} mb="2">
          <InputGroup>
            <InputLeftElement>
              <Icon
                as={item.icon}
                color={getColorSchemeForService(item.label)}
              />
            </InputLeftElement>
            <Input
              variant="filled"
              w="16rem"
              isDisabled={item.isHidden}
              fontSize="sm"
            />
          </InputGroup>
          <ItemMenu
            item={item}
            index={index}
            handlers={{ hide: handleHide, remove: handleDelete }}
          />
        </HStack>
      ))}
    </Section>
  );
};

export default Contact;
