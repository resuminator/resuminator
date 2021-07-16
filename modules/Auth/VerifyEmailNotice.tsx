import { Box, Button, Text, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  onClick?: () => void;
}

const VerifyEmailNotice: React.FC<Props> = ({ onClick }) => {
  const router = useRouter();
  const { email, verified } = router.query;

  const props = {
    bg: useColorModeValue("orange.50", "orange.900"),
    color: useColorModeValue("orange.500", "orange.200"),
  };

  return (
    verified === "false" && (
      <Box
        width="100%"
        minHeight="4rem"
        borderRadius="10px"
        border="1px solid"
        borderColor="orange"
        bg={props.bg}
        p="4"
        mb="2"
      >
        <Text fontSize="sm" color={props.color} mb="2">
          Your email - {email} is not verified yet. Please verify your email by
          following the instructions sent to your inbox. <br /> Did not receive
          the instructions?
        </Text>
        <Button
          size="sm"
          variant="link"
          colorScheme="orange"
          _focus={{ outline: "none" }}
          onClick={onClick}
        >
          Resend Verification Email
        </Button>
      </Box>
    )
  );
};

export default VerifyEmailNotice;
