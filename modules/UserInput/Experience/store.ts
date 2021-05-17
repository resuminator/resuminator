import create from "zustand";
import { DataState, ExperienceState, ExperienceDataObject } from "./types";

const updateArray = (
  array: DataState,
  index: number,
  obj: ExperienceDataObject
) => [...array.slice(0, index), obj, ...array.slice(index + 1)];

const useExperienceStore = create<ExperienceState>((set, get) => ({
  data: [],
  add: (obj) => set((state) => ({ data: [...state.data, obj] })),
  update: (index, key, value) => {
    const obj = { ...get().data[index], [key]: value };
    set((state) => ({ data: updateArray(state.data, index, obj) }));
  },
  toggleVisibility: (index) => {
    const obj = { ...get().data[index] };
    set((state) => ({
      data: updateArray(state.data, index, { ...obj, isHidden: !obj.isHidden }),
    }));
  },
}));

export default useExperienceStore;
