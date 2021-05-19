import create from "zustand";
import { devtools } from "zustand/middleware";
import { EducationDataObject } from "./types";

interface EducationStore {
  isDisabled: boolean;
  toggleDisabled: () => void;
  data: Array<EducationDataObject>;
}

const useEducationStore = create<EducationStore>(
  devtools((set, get) => ({
    isDisabled: false,
    toggleDisabled: () => set((state) => ({ isDisabled: !state.isDisabled })),
    data: [],
  }))
);

export default useEducationStore;