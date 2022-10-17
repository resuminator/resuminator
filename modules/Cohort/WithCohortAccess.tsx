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

import React, { useContext, useEffect, useState } from "react";
import CohortAccessFallback from "./CohortAccessFallback";
import { CohortAccessContext } from "./CohortAccessProvider";

const withCohortAccess = (Component: React.FC, featureFlag: string) => {
  const CohortAccessHandler = (props: any) => {
    const [valueProp, setValueProp] = useState<string | null>(null);
    const { userAccessLevel } = useContext(CohortAccessContext);

    useEffect(() => {
      // fetch feature details from api based on feature flag
      const featureDetails = {
        share_links: {
          valueProp:
            "Shareable links help Pro users get faster feedback and 4x more views on their resumes."
        }
      };

      setValueProp(featureDetails[featureFlag].valueProp);
    }, []);

    return userAccessLevel.features.includes(featureFlag) ? (
      <Component {...props} />
    ) : (
      <CohortAccessFallback valueProp={valueProp} />
    );
  };

  return CohortAccessHandler;
};

export default withCohortAccess;
