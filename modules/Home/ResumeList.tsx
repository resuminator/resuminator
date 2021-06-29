import { Box, Center, GridItem, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import BoxHeader from "../../components/common/BoxHeader";

const ResumeList = () => {
  return (
    <GridItem colSpan={3}>
      <BoxHeader
        title="My Resumes"
        subtitle="Select a resume to start editing"
        size={{ title: "4xl", subtitle: "md" }}
        titleProps={{ as: "h1", letterSpacing: "tight" }}
        spacing="0"
      />
      <HStack spacing="8">
        {[1, 2].map((item) => (
          <Center key={item} flexDirection="column">
            <Box
              h="10rem"
              w="10rem"
              shadow="md"
              borderRadius="10px"
              cursor="pointer"
            >
              Resume {item}
            </Box>
            <Text my="2">Software Developer</Text>
          </Center>
        ))}

        <Center
          flexDir="column"
          h="10rem"
          w="10rem"
          border="1px solid"
          borderColor="GrayText"
          borderRadius="10px"
          cursor="pointer"
        >
          <Icon as={FiPlusCircle} w={6} h={6} color="Highlight" />
          <Text my="2" color="Highlight" fontWeight="semibold" fontSize="sm">
            Create New Resume
          </Text>
        </Center>
      </HStack>
    </GridItem>
  );
};

export default ResumeList;
