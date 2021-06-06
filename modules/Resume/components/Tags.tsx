import { Box } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React from "react";
import useResumeStore from "../../../store/resume.store";

interface Props {
  list: Array<string>;
}

const Tags: React.FC<Props> = ({ list }) => {
  const color = useResumeStore((state) => state.color);

  return (
    <Box>
      {list.map((tag) => (
        <Tag colorScheme={color} variant="subtle" key={tag} mr="1">
          {tag}
        </Tag>
      ))}
    </Box>
  );
};

export default Tags;
