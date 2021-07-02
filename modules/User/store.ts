import produce from "immer";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { UserStore } from "./types";

const useUserStore = create<UserStore>(
  devtools(
    (set) => ({
      _id: "",
      isBanned: 0,
      fullName: "",
      email: "",
      image: "",
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
            const current = draftState.active.filter(
              (item) => item.id === id
            )[0];
            current[key] = value;
          })
        ),
    }),
    "User"
  )
);

export default useUserStore;
