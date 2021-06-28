import produce from "immer";
import { useState } from "react";
import { CustomSectionObject } from "../modules/UserInput/Custom/types";
import useResumeStore from "../store/resume.store";
import { ResumeLayoutObject, Sections } from "../store/types";

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
  const body = useResumeStore((state) => state.properties.layout.body);
  const isDisabled = getDisabledStatus(body, layoutKey);
  const updateLayout = useResumeStore((state) => state.updateLayout);
  const [pos, setPos] = useState([0, 0]);

  /**
   * Toggles the presence of `layoutKey` of an element in the `body` array.
   * @param body Array[][] of Sections
   * @param layoutKey String: Sections
   * @param position {value: number[], handler: React.SetStateAction}
   * @param callback Callback to set the value of `body` array.
   */
  const toggleDisabled = () => {
    if (getDisabledStatus(body, layoutKey)) {
      const [i, j] = pos;
      const nextBody = produce(body, (draftState) => {
        draftState[i].splice(j, 0, layoutKey);
      });
      updateLayout("body", nextBody);
    } else {
      //Saving last position of the element
      const row = body.findIndex((row) => row.includes(layoutKey));
      const col = body[row].indexOf(layoutKey);
      setPos([row, col]);

      const nextBody = body.map((row) =>
        row.filter((key) => key !== layoutKey)
      );
      updateLayout("body", nextBody);
    }
  };

  return { isDisabled, toggleDisabled };
};
