import { Box } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React, { useContext } from "react";
import useResumeStore from "../../../store/resume.store";
import { StylePropsContext } from "../../Design/StylePropsProvider";

interface Props {
  list: Array<string>;
}

const Tags: React.FC<Props> = ({ list }) => {
  const color = useResumeStore((state) => state.color);
  const font = useContext(StylePropsContext).font;

  return (
    <Box aria-label="Tags">
      {list.map((tag) => (
        <Tag
          colorScheme={color}
          {...font.body}
          borderRadius="full"
          variant="subtle"
          key={tag}
          mr="1"
          mb="1.5"
        >
          {tag}
        </Tag>
      ))}
    </Box>
  );
};

export default Tags;
