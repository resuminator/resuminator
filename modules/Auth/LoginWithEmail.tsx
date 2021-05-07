import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { Box } from "@chakra-ui/layout";
import { FaChevronLeft } from "react-icons/fa";
import InputField from "../../components/common/InputField";
import LinkText from "../../components/common/LinkText";
import MotionBox from "../../components/layouts/MotionBox";

interface Props {
  resetClient: () => void;
}

const LogInWithEmail: React.FC<Props> = ({ resetClient }) => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <InputField label="Email" />
      <InputField label="Password" />
      <Button
        isFullWidth
        variant="solid"
        colorScheme="blue"
        textAlign="center"
        mb="4"
      >
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
      <Button isFullWidth variant="link" onClick={resetClient} my="2">
        <FaChevronLeft style={{ paddingRight: "8px" }} /> Back to all options
      </Button>
    </MotionBox>
  );
};

export default LogInWithEmail;
