/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import axios from "axios";
import firebaseSDK from "../../Services/firebaseSDK";
import { SERVER } from "../../utils/Server";

export const fetchUserData = async (uid) => {
  return axios
    .get(`${SERVER}/auth/${uid}`)
    .then((response) => response.data)
    .catch((err) => err.message);
};

export const silentLogin = async (email, password) => {
  return firebaseSDK
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => response.data)
    .catch((err) => err.message);
};

export const setNewPassword = (password) => {
  return firebaseSDK
    .auth()
    .currentUser.updatePassword(password)
    .then((response) => response.data)
    .catch((err) => err.message);
};

export const createNewUser = async (uid, email) => {
  return axios
    .post(`${SERVER}/users/add`, { uid, email })
    .then((response) => response.data)
    .catch((err) => err.message);
};

export const signOut = () => {
  return firebaseSDK.auth().signOut();
};

export const processNewUser = async (
  uid,
  password,
  newPassword,
) => {
  return fetchUserData(uid).then((user) =>
    silentLogin(user.email, password).then(() =>
      setNewPassword(newPassword).then(() =>
        createNewUser(uid, user.email).then((res) => res.data)
      )
    )
  );
};
