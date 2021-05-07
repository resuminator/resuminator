import { Button } from "@chakra-ui/button";
import { Fragment } from "react";
import { FaChevronLeft } from "react-icons/fa";
import InputField from "../../components/common/InputField";

interface Props {
  resetClient: () => void;
}

const LogInWithEmail: React.FC<Props> = ({ resetClient }) => (
  <Fragment>
    <InputField label="Email" />
    <InputField label="Password" />
    <Button variant="link" onClick={resetClient} my="2">
      <FaChevronLeft style={{paddingRight: "8px"}}/> Back to all options
    </Button>
  </Fragment>
);

export default LogInWithEmail;
