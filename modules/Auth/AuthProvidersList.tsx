import { Fragment } from "react";
import AuthProviderCard from "./AuthProviderCard";

interface AuthProvidersListProps {
  setClient: (client) => void;
}

const AuthProvidersList: React.FC<AuthProvidersListProps> = ({ setClient }) => (
  <Fragment>
    <AuthProviderCard client="Google" onClick={() => setClient("Google")} />
    <AuthProviderCard client="Twitter" onClick={() => setClient("Twitter")} />
    <AuthProviderCard client="GitHub" onClick={() => setClient("GitHub")} />
    <AuthProviderCard client="Email" onClick={() => setClient("Email")} />
  </Fragment>
);

export default AuthProvidersList;
