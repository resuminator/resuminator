import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSettings } from "../Settings/settings.actions";
import SwitchButton from "./SwitchButton";

const ViewToggle = ({ name, show, setShow }) => {
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
      setShow(false);
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
      setShow(true);
    }
  };

  return <SwitchButton name={name} onChange={handleView} checked={show} />;
};

export default ViewToggle;
