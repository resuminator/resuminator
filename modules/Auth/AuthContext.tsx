/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import { useRouter } from "next/router";
import nookies from "nookies";
import { createContext, useContext, useEffect, useState } from "react";
import firebaseSDK from "../../services/firebase";

const REFRESH_INTERVAL = 30 * 60 * 1000; //30 Mins

const AuthContext = createContext<{ user: firebase.default.User | null }>({
  user: null
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<firebase.default.User | null>(null);
  const router = useRouter();

  //Listen to token changes.
  useEffect(() => {
    return firebaseSDK.auth().onIdTokenChanged(async (user) => {
      if (user) {
        setUser(user);
        //Save cookie token only if the user is verified
        if (user.emailVerified) {
          const token = await user.getIdToken();
          return nookies.set(undefined, "token", token, { path: "/" });
        }
      } else {
        setUser(null);
        return nookies.set(undefined, "token", "", { path: "/" });
      }
    });
  }, [router]);

  //Force Refresh token every 30 mins. Firebase Limit 60 mins.
  useEffect(() => {
    const interval = setInterval(async () => {
      const user = firebaseSDK.auth().currentUser;
      if (user && user.emailVerified) {
        const newToken = await user.getIdToken(true);
        return nookies.set(undefined, "token", newToken, { path: "/" });
      }
    }, REFRESH_INTERVAL);

    // clean up setInterval
    return () => clearInterval(interval);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
