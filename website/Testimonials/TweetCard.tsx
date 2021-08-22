import {
  Avatar,
  Box,
  HStack,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";

export interface TweetCardProps {
  name: string;
  handle: string;
  image?: string;
  date?: string;
  content: string;
  url: string;
}

const TweetCard: React.FC<TweetCardProps> = ({
  name,
  image,
  date,
  handle,
  content,
  url,
}) => {
  return (
    <Link href={url} target="_blank" _hover={{ textDecoration: "none" }}>
      <Box padding="4" my="2" borderRadius="10px" shadow="md">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px="2"
        >
          <Icon
            as={ImQuotesLeft}
            w={6}
            h={6}
            mb="4"
            opacity="0.30"
            color={useColorModeValue("blue.500", "blue.200")}
          />
          <Icon as={FaTwitter} w={4} h={4} mb="4" color="twitter.500" />
        </Box>
        <HStack alignItems="flex-start">
          <Avatar src={image} size="sm" my="1" />
          <Box>
            <HStack spacing="1" mb="2">
              <Text fontWeight="medium">{name}</Text>
              <Text color="gray">{handle}</Text>
              <Text color="gray">•</Text>
              <Text color="gray">{date}</Text>
            </HStack>
            <Text>{content}</Text>
          </Box>
        </HStack>
      </Box>
    </Link>
  );
};

export default TweetCard;
