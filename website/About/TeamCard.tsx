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

import {
  Avatar,
  Box,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  generateLinkForLabel,
  getIconForService,
} from "../../modules/UserInput/Contact/helpers";
import { TeamMember } from "./types";

const TeamCard: React.FC<TeamMember> = ({
  fullName,
  jobTitle,
  social,
  bio,
  image,
}) => {
  const iconSizes = useBreakpointValue({ base: "sm", md: "md", xl: "lg" });
  return (
    <HStack alignItems="flex-start" mx="2" mb="16">
      <Avatar
        src={image}
        size={useBreakpointValue({ base: "lg", md: "xl" })}
        name={fullName}
      />
      <Box d="flex" flexDir="column" alignItems="flex-start" px="4">
        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="semibold" mb="1">
          {fullName}
        </Text>
        <Text fontSize={{ base: "sm", md: "md" }} fontWeight="medium" mb="1">
          {jobTitle}
        </Text>
        <HStack mb="4" spacing={{ base: "1" }}>
          {social.map((item) => (
            <Link
              key={item.label}
              href={generateLinkForLabel(item.label, item.link)}
              target="_blank"
            >
              <IconButton
                icon={<Icon as={getIconForService(item.label)} />}
                aria-label={`${fullName}-${item.label}`}
                colorScheme="purple"
                isRound
                variant="ghost"
                size={iconSizes}
              />
            </Link>
          ))}
        </HStack>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          letterSpacing="tight"
          color={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
        >
          {bio}
        </Text>
      </Box>
    </HStack>
  );
};

export default TeamCard;
