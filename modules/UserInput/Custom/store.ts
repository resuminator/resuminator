import { GetState, SetState } from "zustand";
import create from "zustand";
import { CustomSectionStore, CustomSectionObject } from "./types";
import { devtools } from "zustand/middleware";

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

export const useCustomSectionStore = create<
  CustomSectionStore<CustomSectionObject>
>(devtools(customSectionStore, "Custom Section"));
