import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { Box } from "@chakra-ui/layout";
import { Fragment } from "react";
import { FaChevronLeft } from "react-icons/fa";
import InputField from "../../components/common/InputField";
import LinkText from "../../components/common/LinkText";

interface Props {
  resetClient: () => void;
}

const LogInWithEmail: React.FC<Props> = ({ resetClient }) => {
  return (
    <Fragment>
      <InputField label="Email" />
      <InputField label="Password" />
      <Button variant="solid" colorScheme="blue" textAlign="center" mb="4">
        Log In
      </Button>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="4"
        color="GrayText"
      >
        <Checkbox size="sm" width="fit-content">
          Remember me
        </Checkbox>
        <LinkText fontSize="sm" href="/LoginHelp">
          Need Help?
        </LinkText>
      </Box>
      <Button variant="link" onClick={resetClient} my="2">
        <FaChevronLeft style={{ paddingRight: "8px" }} /> Back to all options
      </Button>
    </Fragment>
  );
};

export default LogInWithEmail;
