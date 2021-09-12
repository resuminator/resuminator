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

import { ChatWidget } from "@papercups-io/chat-widget";
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../modules/Auth/AuthContext';

const Papercups = () => {
  const auth = useAuth();
  const [user, setUser] = useState({
    uid: "",
    displayName: "",
    email: "",
  });

  useEffect(() => {
    if (auth.user) {
      setUser({
        uid: auth.user.uid || "",
        displayName: auth.user.displayName || "",
        email: auth.user.email,
      });
    }
  }, [auth]);

  return (
    <ChatWidget
      accountId={process.env.NEXT_PUBLIC_PAPERCUPS}
      title="Welcome to Resuminator"
      subtitle="If you have any query, just drop us a message here 🤙🏻"
      primaryColor="#3182CE"
      awayMessage="Our team is currently offine, but feel free to drop your message. Either Vivek or Himanshu will get back to you soon."
      newMessagePlaceholder="Start typing..."
      showAgentAvailability={false}
      agentAvailableText="We're online right now!"
      agentUnavailableText="We're away at the moment."
      requireEmailUpfront={false}
      iconVariant="filled"
      baseUrl="https://app.papercups.io"
      customer={{
        name: user.displayName,
        email: user.email,
        external_id: user.uid,
      }}
    />
  )
}

export default Papercups
