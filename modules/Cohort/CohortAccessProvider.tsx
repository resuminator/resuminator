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

import { createContext, useEffect, useState } from "react";
import { free_access, pro_access } from "./data";
import { AccessLevel } from "./types";

export const CohortAccessContext = createContext<{
  userAccessLevel: AccessLevel;
}>({
  userAccessLevel: free_access
});

const CohortAccessProvider = (props) => {
  const { children } = props;
  const [userAccessLevel, setUserAccessLevel] =
    useState<AccessLevel>(free_access);

  useEffect(() => {
    //Fetch user access level from API
    // setUserAccessLevel(free_access);
    setUserAccessLevel(pro_access);
  }, []);

  return (
    <CohortAccessContext.Provider value={{ userAccessLevel }}>
      {children}
    </CohortAccessContext.Provider>
  );
};

export default CohortAccessProvider;
