import { GetState, SetState } from "zustand";
import { CustomSectionStore } from "./types";

const customSectionStore = <T>(
  set: SetState<CustomSectionStore<T>>,
  get: GetState<CustomSectionStore<T>>
): CustomSectionStore<T> => ({
  header: "",
  hasTitleRow: false,
  data: [],
  layout: [],
  setState: (key, value) => set((state) => ({ ...state, [key]: value })),
});

export default customSectionStore;