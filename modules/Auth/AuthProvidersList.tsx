import MotionBox from "../../components/layouts/MotionBox";
import AuthProviderCard from "./AuthProviderCard";

interface AuthProvidersListProps {
  setClient: (client) => void;
}

const AuthProvidersList: React.FC<AuthProvidersListProps> = ({ setClient }) => (
  <MotionBox
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <AuthProviderCard client="Google" onClick={() => setClient("Google")} />
    <AuthProviderCard client="GitHub" onClick={() => setClient("GitHub")} />
    <AuthProviderCard client="Email" onClick={() => setClient("Email")} />
  </MotionBox>
);

export default AuthProvidersList;
