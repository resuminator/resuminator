import { Box, Heading, Text } from "@chakra-ui/react";
import TweetCard from "./TweetCard";
import tweets from "./tweets";

const Testimonials = () => {
  return (
    <Box px="8" py="16">
      <Heading fontSize="4xl" fontWeight="bold" letterSpacing="tighter" mb="4" color="twitter.500">
        What&apos;s buzzing?
      </Heading>
      <Text fontSize="xl" fontWeight="medium" letterSpacing="tight" mb="8">
        Hear our whispers across the internet
      </Text>
      {tweets.map((tweet) => (
        <TweetCard key={tweet.handle} {...tweet} />
      ))}
    </Box>
  );
};

export default Testimonials;
