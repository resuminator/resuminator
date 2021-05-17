import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import Section from "../../../components/layouts/Section";
import SocialMediaMenu from "../../SocialMedia";
import { getColorSchemeForService } from "../../SocialMedia/helpers";
import ItemMenu from "../ItemMenu";
import SectionControls, { SectionProperties } from "../SectionControls";
import useContactStore from "./store";

const Contact = () => {
  const [properties, setProperties] = useState<SectionProperties>({
    isHidden: false,
  });
  const data = useContactStore((state) => state.data);
  const update = useContactStore((state) => state.update);
  const add = useContactStore((state) => state.add);

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  const handleDelete = (index: number) => {
    const preList = data.slice(0, index);
    const postList = data.slice(index + 1);
    // setData([...preList, ...postList]);
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
        <SocialMediaMenu handler={{ add }} />
      </SectionControls>

      {/* Displaying user handles */}
      {data.map((item, index) => (
        <HStack key={item.label} mb="2">
          <InputGroup flexBasis="80%">
            <InputLeftElement>
              <Icon
                as={item.icon}
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
            }}
          />
        </HStack>
      ))}
    </Section>
  );
};

export default Contact;
