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
import { featureDetails } from "./data";

/**
 * HOC to check if the user has access to a particular feature
 * @param Component The component to be rendered (if the user has access)
 * @param featureFlag The feature flag to check for
 * @param render Fallback component to be rendered (if the user does not have access)
 * @returns A component that renders the Component if the user has access, else renders the fallback component
 */
const withCohortAccess = (
  Component: React.FC,
  featureFlag: string,
  render?: React.ReactNode
) => {
  const CohortAccessHandler = (props: any) => {
    const [valueProp, setValueProp] = useState<string | null>(null);
    const { userAccessLevel } = useContext(CohortAccessContext);

    useEffect(() => {
      // fetch feature details from api based on feature flag
      // TODO: Fetch Logic

      if (featureDetails[featureFlag]) {
        setValueProp(featureDetails[featureFlag].valueProp);
      }
    }, []);

    const hasAccess = userAccessLevel.features.includes(featureFlag);

    if (hasAccess) {
      return <Component {...props} />;
    }

    return <CohortAccessFallback valueProp={valueProp} render={render} />;
  };

  return CohortAccessHandler;
};

export default withCohortAccess;
