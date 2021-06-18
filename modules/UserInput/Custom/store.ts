import produce from "immer";
import create, { GetState, SetState } from "zustand";
import { devtools } from "zustand/middleware";
import { CustomSectionObject, CustomSectionStore } from "./types";

const customSectionStore = <CustomSectionObject>(
  set: SetState<CustomSectionStore<CustomSectionObject>>,
  get: GetState<CustomSectionStore<CustomSectionObject>>
): CustomSectionStore<CustomSectionObject> => ({
  sections: [],
  setSections: (value) => set({ sections: value }),
  updateData: (id, value) => set((state) => produce(state, draftState => {
    const currentData = draftState.sections
  }))
});

export const useCustomSectionStore = create<
  CustomSectionStore<CustomSectionObject>
>(devtools(customSectionStore, "Custom Section"));
