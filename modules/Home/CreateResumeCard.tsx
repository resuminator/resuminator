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

import { Center, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { FiPlusCircle } from "react-icons/fi";

interface CreateResumeCardProps {
  onClick?: () => void;
}

const CreateResumeCard: React.FC<CreateResumeCardProps> = ({ onClick }) => {
  const hoverProps = {
    bg: useColorModeValue("gray.100", "whiteAlpha.100"),
    color: useColorModeValue("blue.500", "blue.300"),
  };

  return (
    <Center
      flexDir="column"
      h="10rem"
      w="10rem"
      border="1px solid"
      borderRadius="10px"
      cursor="pointer"
      color={useColorModeValue("gray.600", "whiteAlpha.600")}
      _hover={hoverProps}
      transition="0.2s all"
      onClick={onClick}
    >
      <Icon as={FiPlusCircle} w={6} h={6} />
      <Text my="2" fontWeight="semibold" fontSize="sm">
        Create New Resume
      </Text>
    </Center>
  );
};

export default CreateResumeCard;
