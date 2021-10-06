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

import { GetState, SetState } from "zustand";
import { updateArray } from "../utils";
import { Store } from "./types";

const store = <ObjectType>(
  set: SetState<Store<ObjectType>>,
  get: GetState<Store<ObjectType>>
): Store<ObjectType> => ({
  //Data array which comes from the server.
  data: [],
  setData: (list) => set({ data: list }),
  //Adds a new object to array (a dummy function for now).
  //TODO: This will be converted to add new object on the server and then return and set the data state.
  add: (obj) => set((state) => ({ data: [obj, ...state.data] })),
  //Updates an object at a particular index with a key and value pair.
  update: (index, key, value) => {
    const obj = { ...get().data[index], [key]: value };
    set((state) => ({ data: updateArray(state.data, index, obj) }));
  }
  //TODO: Add delete action for server.
});

export default store;
