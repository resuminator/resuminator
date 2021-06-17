import create, { GetState, SetState } from "zustand";
import { devtools } from "zustand/middleware";
import { CustomSectionObject, CustomSectionStore } from "./types";

const customSectionStore = <T>(
  set: SetState<CustomSectionStore<T>>,
  get: GetState<CustomSectionStore<T>>
): CustomSectionStore<T> => ({
  data: [],
  setData: (value) => set({ data: value }),
});

export const useCustomSectionStore = create<
  CustomSectionStore<CustomSectionObject>
>(devtools(customSectionStore, "Custom Section"));
