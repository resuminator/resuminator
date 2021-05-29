import create from "zustand";
import { devtools } from "zustand/middleware";
import { GlobalStore } from "./types";

const useGlobalStore = create<GlobalStore>(
  devtools(
    (set) => ({
      init: false,
      status: { error: false, loading: false, success: false },
      properties: { inputs: [], layout: { header: [], body: [], footer: [] } },
      setProperties: (value) => set({properties: value}),
      updateInputs: (arr) =>
        set((state) => ({
          properties: {
            ...state.properties,
            inputs: arr,
          },
        })),
      updateLayout: (key: string, value: any) =>
        set((state) => ({
          properties: {
            ...state.properties,
            layout: { ...state.properties.layout, [key]: value },
          },
        })),
      setStatus: (key, value) =>
        set((state) => ({ status: { ...state.status, [key]: value } })),
      setInit: (value) => set({ init: value }),
    }),
    "Global"
  )
);

export default useGlobalStore;
