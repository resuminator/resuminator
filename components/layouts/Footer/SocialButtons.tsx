import { ButtonGroup, IconButton } from "@chakra-ui/button";
import { Divider } from "@chakra-ui/layout";
import React, { Fragment } from "react";
import { SocialDataObject } from "../../../data/SocialLinks";

interface Props {
  data: Array<SocialDataObject>;
}

const SocialButtons: React.FC<Props> = ({ data }) => {
  return (
    <ButtonGroup>
      {data.map((item, index) => (
        <Fragment key={item.ariaLabel}>
          <IconButton
            variant="ghost"
            aria-label={item.ariaLabel}
            icon={<item.icon />}
            isRound
            color="whiteAlpha.900"
            colorScheme="inherit"
            as="a"
            href={item.link}
            target="_blank"
          />
        </Fragment>
      ))}
    </ButtonGroup>
  );
};

export default SocialButtons;
