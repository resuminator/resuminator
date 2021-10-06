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

import create, { GetState, SetState } from "zustand";
import { devtools } from "zustand/middleware";
import { updateArray } from "../../../utils";
import { SkillDataObject, SkillStore } from "./types";

const skillStore = <T>(
  set: SetState<SkillStore<T>>,
  get: GetState<SkillStore<T>>
): SkillStore<T> => ({
  format: "CATEGORIES",
  toggleFormat: () =>
    set((state) => ({
      format: state.format === "CATEGORIES" ? "TAGS" : "CATEGORIES"
    })),
  setFormat: (value) => set({ format: value }),
  data: [],
  setData: (list) => set({ data: list }),
  add: (obj) => set((state) => ({ data: [...state.data, obj] })),
  //Updates an object at a particular index with a key and value pair.
  update: (index, key, value) => {
    const obj = { ...get().data[index], [key]: value };
    set((state) => ({ data: updateArray(state.data, index, obj) }));
  }
});

const useSkillStore = create<SkillStore<SkillDataObject>>(
  devtools(skillStore, "Skills")
);

export default useSkillStore;
