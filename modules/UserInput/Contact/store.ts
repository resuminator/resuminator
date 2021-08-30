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
import { updateArray } from "../../../utils";
import { ContactDataObject, ContactStore } from "./types";

const contactStore = <T>(
  set: SetState<ContactStore<T>>,
  get: GetState<ContactStore<T>>
): ContactStore<T> => ({
  fullName: "",
  jobTitle: "",
  userImage: "",
  contact: [],
  add: (obj) => set((state) => ({ contact: [...state.contact, obj] })),
  update: (index, key, value) => {
    const obj = { ...get().contact[index], [key]: value };
    set((state) => ({ contact: updateArray(state.contact, index, obj) }));
  },
  setProperty: (key, value) =>
    set((state) =>
      produce(state, (draftState) => {
        draftState[key] = value;
      })
    ),
});

const useContactStore = create<ContactStore<ContactDataObject>>(
  devtools(contactStore, "Contact")
);

export default useContactStore;
