import create from "zustand";
import { devtools } from "zustand/middleware";
import store from "../../../store";
import { Store } from "../../../store/types";
import { ExperienceDataObject } from "./types";

const useExperienceStore = create<Store<ExperienceDataObject>>(
  devtools(store, "Experience")
);

export default useExperienceStore;
