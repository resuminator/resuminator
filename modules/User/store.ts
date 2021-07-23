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
