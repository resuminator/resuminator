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

import { Storytime } from "@papercups-io/storytime";
import { useEffect, useState } from "react";
import { useAuth } from "../../modules/Auth/AuthContext";

const PapercupsStorytime = () => {
  const KEY = process.env.NEXT_PUBLIC_PAPERCUPS;
  const auth = useAuth();
  const [user, setUser] = useState({
    uid: "",
    displayName: "",
    email: ""
  });

  useEffect(() => {
    if (auth.user) {
      setUser({
        uid: auth.user.uid || "",
        displayName: auth.user.displayName || "",
        email: auth.user.email
      });
    }
  }, [auth]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Storytime.init({
        accountId: KEY,

        // Optionally pass in metadata to identify the customer
        customer: {
          name: user.displayName,
          email: user.email,
          external_id: user.uid
        },

        // Optionally specify the base URL
        baseUrl: "https://app.papercups.io"
      });
    }
  }, [KEY, user]);

  if (!KEY) return null;

  return <div aria-label="Papercups-Storytime"></div>;
};

export default PapercupsStorytime;
