import firebase from "firebase/app";

export const authPersist = {
  local: firebase.auth.Auth.Persistence.LOCAL,
  session: firebase.auth.Auth.Persistence.SESSION,
  none: firebase.auth.Auth.Persistence.NONE,
};
