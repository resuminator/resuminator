import create from "zustand";
import { devtools } from "zustand/middleware";
import store from "../../../store";
import { Store } from "../../../store/types";
import { EducationDataObject } from "./types";

const useEducationStore = create<Store<EducationDataObject>>(
  devtools(store, "Education")
);

export default useEducationStore;
