import {
  Avatar,
  Box,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
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
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontWeight="semibold"
          mb="1"
        >
          {fullName}
        </Text>
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          fontWeight="medium"
          mb="1"
        >
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
          fontSize={{ base: "sm", md: "md", xl: "lg" }}
          letterSpacing="tight"
        >
          {bio}
        </Text>
      </Box>
    </HStack>
  );
};

export default TeamCard;
