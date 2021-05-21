import create from "zustand";
import { devtools } from "zustand/middleware";
import store, { Store } from "../../../store";
import { ExperienceDataObject } from "./types";

const useExperienceStore = create<Store<ExperienceDataObject>>(
  devtools(store, "Experience")
);

export default useExperienceStore;
