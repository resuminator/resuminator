/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2022  Resuminator Authors

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

import React, { createContext, useState, useEffect } from "react";

export const CohortAccessContext = createContext({ userAccessLevel: {} });

const CohortAccessProvider = (props) => {
  const { children } = props;
  const [userAccessLevel, setUserAccessLevel] = useState({});

  useEffect(() => {
    //Fetch user access level from API
    const accessLevels = {
        free: 'free',
        // pro: 'pro',
    };

    setUserAccessLevel(accessLevels);
  }, []);

  return (
    <CohortAccessContext.Provider value={{ userAccessLevel }}>
      {children}
    </CohortAccessContext.Provider>
  );
};

export default CohortAccessProvider;