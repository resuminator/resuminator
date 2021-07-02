import { GridItem, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import BoxHeader from "../../components/common/BoxHeader";
import { ResumeMetadata } from "../User/types";
import NewResumeCard from "./NewResumeCard";
import ResumeCard from "./ResumeCard";

interface ResumeListProps {
  data: Array<ResumeMetadata>;
}

const ResumeList: React.FC<ResumeListProps> = ({ data }) => {
  const router = useRouter();
  const handleSelect = (id: string) => {
    router.push(`/create/${id}`);
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
      <HStack spacing="8" alignItems="flex-start">
        {data.map((item) => (
          <ResumeCard key={item.id} dataObject={item} callback={handleSelect} />
        ))}
        <NewResumeCard />
      </HStack>
    </GridItem>
  );
};

export default ResumeList;
