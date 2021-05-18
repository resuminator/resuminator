import create, { GetState, SetState } from "zustand";
import { devtools } from "zustand/middleware";
import { DataState, ExperienceDataObject } from "./types";

const updateArray = (
  array: DataState,
  index: number,
  obj: ExperienceDataObject
) => [...array.slice(0, index), obj, ...array.slice(index + 1)];

export interface ExperienceState {
  isDisabled: boolean;
  data: DataState;
  add: (obj: ExperienceDataObject) => void;
  update: (index: number, key: string, value: any) => void;
  toggleDisabled: () => void;
}

const experienceStore = (
  set: SetState<ExperienceState>,
  get: GetState<ExperienceState>
): ExperienceState => ({
  isDisabled: false,
  //Data array which comes from the server.
  data: [],
  //Adds a new object to array (a dummy function for now).
  //TODO: This will be converted to add new object on the server and then return and set the data state.
  add: (obj) => set((state) => ({ data: [...state.data, obj] })),
  //Updates an object at a particular index with a key and value pair.
  update: (index, key, value) => {
    const obj = { ...get().data[index], [key]: value };
    set((state) => ({ data: updateArray(state.data, index, obj) }));
  },
  toggleDisabled: () => set((state) => ({ isDisabled: !state.isDisabled })),
  //TODO: Add delete action for server.
});

const useExperienceStore = create(devtools(experienceStore, "Experience"));

export default useExperienceStore;
