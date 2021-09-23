import { Button, ButtonGroup } from "@chakra-ui/button";
import { Text, VStack } from "@chakra-ui/layout";
import React from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { FiBook, FiGitPullRequest } from "react-icons/fi";
import { HFColors } from "./hf_colors";

//Date of Hacktoberfest (MM/DD/YYYY HH:MM AM/PM)
const DATE_OF_HACKTOBERFEST = "10/01/2021 10:30 AM";

const Renderer: React.FC<CountdownRenderProps> = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}) => {
  if (completed) {
    return (
      <ButtonGroup my="4">
        <Button
          as="a"
          href="#issues"
          colorScheme="orange"
          rightIcon={<FiGitPullRequest />}
        >
          Find issues to contribute
        </Button>
        <Button
          as="a"
          href={""}
          colorScheme="black"
          variant="outline"
          rightIcon={<FiBook />}
        >
          Read Documentation
        </Button>
      </ButtonGroup>
    );
  }

  return (
    <VStack>
      <Text fontSize={{ base: "md", xl: "xl" }} fontWeight="normal">
        Hacktoberfest &apos;21 with Resuminator will be live in
      </Text>
      <Text
        fontSize={{ base: "3xl", xl: "5xl" }}
        fontWeight="semibold"
        color={HFColors.text.primary}
      >
        {days}d {hours}h {minutes}m {seconds}s
      </Text>
    </VStack>
  );
};

const CountdownTimer = () => {
  return (
    <Countdown date={new Date(DATE_OF_HACKTOBERFEST)} renderer={Renderer} />
  );
};

export default CountdownTimer;
