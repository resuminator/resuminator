import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { NextPage } from "next";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";
import BoxHeader from "../components/common/BoxHeader";
import InputField from "../components/common/InputField";
import ScreenCenter from "../components/layouts/ScreenCenter";

const LoginHelp: NextPage = () => {
  return (
    <ScreenCenter>
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        p={{ base: "2rem", md: "4rem" }}
        borderRadius="10px"
        shadow="lg"
        flexBasis={{ base: "90%", md: "60%", lg: "40%" }}
      >
        <BoxHeader
          title="Forgot Password?"
          subtitle="Enter your email for instructions on resetting your password"
        />
        <InputField label="Email" />
        <Link href="/login">
          <Button
            fontWeight="medium"
            variant="solid"
            colorScheme="purple"
            mt="2"
          >
            <FaChevronLeft style={{ paddingRight: "8px" }} /> Back to log in
            page
          </Button>
        </Link>
      </Box>
    </ScreenCenter>
  );
};

export default LoginHelp;
