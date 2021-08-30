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

import { Center, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { isCustom } from "../Design/Colors/ColorSelector";
import { ResumeMetadata } from "../User/types";
const ResumeCardOptions = dynamic(() => import("./ResumeCardOptions"));

interface ResumeCardProps {
  dataObject: ResumeMetadata;
  callback: (id: string) => void;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ dataObject, callback }) => {
  const primaryColor = isCustom(dataObject.color)
    ? dataObject.color
    : `${dataObject.color}.500`;

  return (
    <Center key={dataObject._id} flexDirection="column">
      <Center
        h="10rem"
        w="10rem"
        bg={primaryColor}
        _hover={{ shadow: "md", filter: "brightness(80%)" }}
        borderRadius="10px"
        cursor="pointer"
        onClick={() => callback(dataObject._id)}
        transition="all 0.2s"
      >
        <Text fontSize="4xl">{dataObject.icon}</Text>
      </Center>
      <ResumeCardOptions dataObject={dataObject} />
    </Center>
  );
};

export default ResumeCard;
