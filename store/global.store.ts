import create from "zustand";
import { devtools } from "zustand/middleware";
import { GlobalStore } from "./types";

const useGlobalStore = create<GlobalStore>(
  devtools(
    (set) => ({
      init: false,
      isLoading: false,
      grayscaleFilter: false,
      setLoading: (value) => set({ isLoading: value }),
      setInit: (value) => set({ init: value }),
      toggleGrayscaleFilter: () =>
        set((state) => ({ grayscaleFilter: !state.grayscaleFilter })),
    }),
    "Global"
  )
);

export default useGlobalStore;
