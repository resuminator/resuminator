import { Button } from "@chakra-ui/button";
import { FaChevronLeft } from "react-icons/fa";
import InputField from "../../components/common/InputField";
import MotionBox from "../../components/layouts/MotionBox";

interface Props {
  resetClient: () => void;
}

const SignUpWithEmail: React.FC<Props> = ({ resetClient }) => {
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <InputField label="Full Name" type="text"/>
      <InputField label="Email" type="email" />
      <InputField label="Password" type="password"/>
      <InputField label="Confirm Password" type="password"/>
      <Button
        isFullWidth
        variant="solid"
        colorScheme="blue"
        textAlign="center"
        mb="4"
      >
        Create new account
      </Button>
      <Button isFullWidth variant="link" onClick={resetClient} my="2">
        <FaChevronLeft style={{ paddingRight: "8px" }} /> Back to all options
      </Button>
    </MotionBox>
  );
};

export default SignUpWithEmail;
