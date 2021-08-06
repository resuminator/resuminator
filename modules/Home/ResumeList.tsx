import { GridItem, HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import BoxHeader from "../../components/common/BoxHeader";
import useUserStore from "../User/store";
import CreateResumeCard from "./CreateResumeCard";
import ResumeCard from "./ResumeCard";

interface ResumeListProps {
  handleNew?: () => void;
}

const ResumeList: React.FC<ResumeListProps> = ({ handleNew }) => {
  const router = useRouter();
  const handleSelect = (id: string) => {
    router.push(`/create/${id}`);
  };
  const data = useUserStore((state) => state.active);

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
          <ResumeCard key={item._id} dataObject={item} callback={handleSelect} />
        ))}
        <CreateResumeCard onClick={handleNew} />
      </HStack>
    </GridItem>
  );
};

export default ResumeList;
