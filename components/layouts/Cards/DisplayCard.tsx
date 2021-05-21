import Icon from "@chakra-ui/icon";
import { Box, Text } from "@chakra-ui/layout";
import React, { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import { GrDrag } from "react-icons/gr";
import { DisclosureContext } from "./ExpandableCard";

export interface DisplayCardProps {
  index: number;
  draggableId: string;
  title: string;
  subtitle?: string;
  titlePlaceholder?: string;
}

const DisplayCard: React.FC<DisplayCardProps> = ({
  draggableId,
  index,
  title,
  subtitle,
  titlePlaceholder,
  ...props
}) => {
  const { onToggle } = useContext(DisclosureContext);
  return (
    <Draggable key={draggableId} draggableId={draggableId} index={index}>
      {(provided) => (
        <Box
          key={draggableId}
          ref={provided.innerRef}
          {...provided.draggableProps}
          p="5"
          mb="2"
          border="1px solid"
          borderRadius="10px"
          shadow="md"
          cursor="pointer"
          display="flex"
          justifyContent="space-between"
          _hover={{ bg: "whiteAlpha.100" }}
          onClick={onToggle}
          {...props}
          
        >
          <Box>
            <Text>{title || titlePlaceholder}</Text>
            <Text fontSize="sm" color="GrayText">
              {subtitle || "Click on this card to expand and start editing"}
            </Text>
          </Box>
          <Box
            transition="all 0.2s"
            opacity="0.2"
            _hover={{ opacity: "0.8" }}
            {...provided.dragHandleProps}
          >
            <Icon as={GrDrag} mt="1.5" />
          </Box>
        </Box>
      )}
    </Draggable>
  );
};

export default DisplayCard;
