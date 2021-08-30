/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

import produce from "immer";
import create, { GetState, SetState } from "zustand";
import { devtools } from "zustand/middleware";
import { Store } from "./types";

const customSectionStore = (
  set: SetState<Store>,
  get: GetState<Store>
): Store => ({
  sections: [],
  setSections: (value) => set({ sections: value }),
  addSection: (value) =>
    set((state) => ({ sections: [...state.sections, value] })),
  deleteSection: (sectionId) =>
    set((state) =>
      produce(state, (draftState) => {
        const nextSections = draftState.sections.filter(
          (item) => item._id !== sectionId
        );
        draftState.sections = nextSections;
      })
    ),
  updateSections: (sectionId, key, value) =>
    set((state) =>
      produce(state, (draftState) => {
        const currentSection = draftState.sections.filter(
          (item) => item._id === sectionId
        )[0];
        currentSection[key] = value;
      })
    ),
  addData: (sectionId, value) =>
    set((state) =>
      produce(state, (draftState) => {
        const currentSection = draftState.sections.filter(
          (item) => item._id === sectionId
        )[0];
        currentSection["data"].unshift(value);
      })
    ),
  deleteData: (sectionId, id) =>
    set((state) =>
      produce(state, (draftState) => {
        const currentSection = draftState.sections.filter(
          (item) => item._id === sectionId
        )[0];
        const nextData = currentSection.data.filter((item) => item._id !== id);
        currentSection.data = nextData;
      })
    ),
  updateData: (sectionId, id, key, value) =>
    set((state) =>
      produce(state, (draftState) => {
        const currentSection = draftState.sections.filter(
          (item) => item._id === sectionId
        )[0];
        const currentDataObject = currentSection.data.filter(
          (item) => item._id === id
        )[0];
        currentDataObject.values[key] = value;
      })
    ),
  toggleDataVisibility: (sectionId, id) =>
    set((state) =>
      produce(state, (draftState) => {
        const currentSection = draftState.sections.filter(
          (item) => item._id === sectionId
        )[0];
        const currentDataObject = currentSection.data.filter(
          (item) => item._id === id
        )[0];
        currentDataObject.isHidden = !currentDataObject.isHidden;
      })
    ),
});

export const useCustomSectionStore = create<Store>(
  devtools(customSectionStore, "Custom Section")
);
