import create from "zustand";
import { devtools } from "zustand/middleware";
import store, { Store } from "../../../store";
import { EducationDataObject } from "./types";

const useEducationStore = create<Store<EducationDataObject>>(
  devtools(store, "Education")
);

export default useEducationStore;
