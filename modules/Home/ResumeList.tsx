/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

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
    <GridItem colStart={2}>
      <BoxHeader
        title="My Resumes"
        subtitle="Select a resume to start editing"
        size={{ title: "4xl", subtitle: "md" }}
        titleProps={{ as: "h1", letterSpacing: "tight" }}
        spacing="0"
      />
      <HStack spacing="8" alignItems="flex-start">
        {data.map((item) => (
          <ResumeCard
            key={item._id}
            dataObject={item}
            callback={handleSelect}
          />
        ))}
        <CreateResumeCard onClick={handleNew} />
      </HStack>
    </GridItem>
  );
};

export default ResumeList;
