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
import create from "zustand";
import { devtools } from "zustand/middleware";
import { UserStore } from "./types";

const useUserStore = create<UserStore>(
  devtools(
    (set) => ({
      _id: "",
      isBanned: 0,
      active: [],
      setProperty: (key, value) =>
        set((state) =>
          produce(state, (draftState) => {
            draftState[key] = value;
          })
        ),
      updateActive: (id, key, value) =>
        set((state) =>
          produce(state, (draftState) => {
            const current = draftState.active.find((item) => item._id === id);
            current[key] = value;
          })
        ),
    }),
    "User"
  )
);

export default useUserStore;
