import { Box, Center, GridItem, HStack, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FiPlusCircle } from "react-icons/fi";
import BoxHeader from "../../components/common/BoxHeader";
import { ResumeListType, ResumeStyleObject } from "../../store/types";

interface ResumeListProps {
  data: ResumeListType;
  callback: (object: ResumeStyleObject) => void;
}

const ResumeList: React.FC<ResumeListProps> = ({ data, callback }) => {
  const handleSelect = (id: string) => {
    const obj = data.filter((item) => item.id === id)[0];
    callback(obj);
  };

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
        {data.map((item) => (
          <Center key={item.id} flexDirection="column">
            <Link href="/create">
              <Box
                h="10rem"
                w="10rem"
                shadow="md"
                borderRadius="10px"
                cursor="pointer"
                onClick={() => handleSelect(item.id)}
              >
                {item.profile_name}
              </Box>
            </Link>
            <Text my="2">{item.profile_name}</Text>
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
