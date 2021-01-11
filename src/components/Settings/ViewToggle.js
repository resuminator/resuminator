/*
 * Copyright Vivek Nigam, 2020
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Authors:
 * - Vivek Nigam, <viveknigam.nigam3@gmail.com>, 2020
 */

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "./settings.actions";
import SwitchButton from "../common/SwitchButton";

const ViewToggle = ({ name, label, show }) => {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const modules = settings.modules;
  const combinedList = modules.left.concat(modules.right);

  const handleView = (e) => {
    if (combinedList.includes(e.target.name)) {
      const newModules = {
        left: modules["left"].filter((item) => item !== e.target.name),
        right: modules["right"].filter((item) => item !== e.target.name),
      };
      dispatch(
        updateSettings(settings.uid, settings._id, { modules: newModules })
      );
    } else {
      const newModules =
        modules["left"].length >= 3
          ? {
              ...modules,
              right: [...modules["right"], e.target.name],
            }
          : {
              ...modules,
              left: [...modules["left"], e.target.name],
            };
      dispatch(
        updateSettings(settings.uid, settings._id, { modules: newModules })
      );
    }
  };

  return <SwitchButton name={name} label={label} onChange={handleView} checked={show} />;
};

export default ViewToggle;
