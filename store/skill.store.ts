import { GetState, SetState } from "zustand";
import { updateArray } from "../utils";

export interface SkillStore<T> {
  format: "CATEGORIES" | "TAGS";
  isDisabled: boolean;
  toggleDisabled: () => void;
  toggleFormat: () => void;
  data: Array<T>;
  add: (obj: T) => void;
  update: (index: number, key: string, value: any) => void;
}

const skillStore = <T,>(
  set: SetState<SkillStore<T>>,
  get: GetState<SkillStore<T>>
): SkillStore<T> => ({
  format: "CATEGORIES",
  isDisabled: false,
  toggleDisabled: () => set((state) => ({ isDisabled: !state.isDisabled })),
  toggleFormat: () =>
    set((state) => ({
      format: state.format === "CATEGORIES" ? "TAGS" : "CATEGORIES",
    })),
  data: [],
  add: (obj) => set((state) => ({ data: [...state.data, obj] })),
  //Updates an object at a particular index with a key and value pair.
  update: (index, key, value) => {
    const obj = { ...get().data[index], [key]: value };
    set((state) => ({ data: updateArray(state.data, index, obj) }));
  },
});

export default skillStore;
