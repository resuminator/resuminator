/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import React, { createContext, useState } from "react";
import { useSelector } from "react-redux";
import firebaseSDK from "../../Services/firebaseSDK";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [uid, setUid] = useState("");
  const verified = useSelector(state=> state.userInfo.verified);
  const [user, setUser] = useState(null);

  React.useEffect(() => {
    firebaseSDK.auth().onAuthStateChanged((user) => {
      if (user) {
        setUid(() => user.uid);
        setUser(user);

        //syncing local state from firebase state
        if (!verified) localStorage.setItem("user_verified", user.emailVerified);
      }
    });
  }, [verified]);

  return (
    <AuthContext.Provider value={{ user, verified, uid, setUid }}>
      {children}
    </AuthContext.Provider>
  );
};
