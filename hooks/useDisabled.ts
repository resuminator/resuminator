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

import produce from "immer";
import { useState } from "react";
import { patchLayout } from "../apis/patchTemplate";
import { CustomSectionObject } from "../modules/UserInput/Custom/types";
import useResumeStore from "../store/resume.store";
import { Result, ResumeLayoutObject, Sections } from "../store/types";
import { useCustomToast } from "./useCustomToast";
import { usePatchParams } from "./usePatchParams";

/**
 * Returns the disabled status of a section using its layout key.
 * @param body Array[][] of Sections
 * @param layoutKey String: Section
 * @returns `true` if the `layoutKey` is present in `body`
 */
export const getDisabledStatus = (
  body: ResumeLayoutObject["body"],
  layoutKey: Sections | CustomSectionObject["header"]
) => {
  const bodyLayoutKeys = body.reduce((initial, item) => [...initial, ...item]);
  return !bodyLayoutKeys.includes(layoutKey);
};

export const useDisabled = (
  layoutKey: Sections | CustomSectionObject["header"] = ""
) => {
  const layout = useResumeStore((state) => state.properties.layout);
  const { body } = layout;
  const isDisabled = getDisabledStatus(body, layoutKey);
  const updateLayout = useResumeStore((state) => state.updateLayout);
  const [pos, setPos] = useState([0, 0]);
  const { token, resumeId } = usePatchParams();
  const { createToast } = useCustomToast();

  const handleLayoutUpdate = async (
    nextBody: ResumeLayoutObject["body"],
    layoutKey: Sections | CustomSectionObject["header"],
    successMessage = `Toggled visibility for ${layoutKey.toLowerCase()}`
  ) => {
    updateLayout("body", nextBody);

    return await patchLayout(token, resumeId, {
      layout: { ...layout, body: nextBody },
    })
      .then((res: Result) => {
        updateLayout("body", res.template.layout.body);
        return createToast(successMessage, "success");
      })
      .catch(() =>
        createToast(
          `Couldn't update resume layout`,
          "error",
          "Please try again in sometime"
        )
      );
  };

  /**
   * Toggles the presence of `layoutKey` of an element in the `body` array.
   */
  const toggleDisabled = async () => {
    if (getDisabledStatus(body, layoutKey)) {
      const [i, j] = pos;
      const nextBody = produce(body, (draftState) => {
        draftState[i].splice(j, 0, layoutKey);
      });
      return await handleLayoutUpdate(nextBody, layoutKey);
    } else {
      //Saving last position of the element
      const row = body.findIndex((row) => row.includes(layoutKey));
      const col = body[row].indexOf(layoutKey);
      setPos([row, col]);

      const nextBody = body.map((row) =>
        row.filter((key) => key !== layoutKey)
      );
      return await handleLayoutUpdate(nextBody, layoutKey);
    }
  };

  return { isDisabled, toggleDisabled, handleLayoutUpdate };
};
