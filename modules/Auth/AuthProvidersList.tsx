import MotionBox from "../../components/layouts/MotionBox";
import AuthProviderCard from "./AuthProviderCard";

interface AuthProvidersListProps {
  handleSignIn: (client) => void;
}

const AuthProvidersList: React.FC<AuthProvidersListProps> = ({
  handleSignIn,
}) => (
  <MotionBox
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* <AuthProviderCard client="Google" onClick={() => handleSignIn("Google")} />
    <AuthProviderCard client="GitHub" onClick={() => handleSignIn("GitHub")} /> */}
    <AuthProviderCard client="Email" onClick={() => handleSignIn("Email")} />
  </MotionBox>
);

export default AuthProvidersList;
