import produce from "immer";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { ResumeStore } from "./types";

const useResumeStore = create<ResumeStore>(
  devtools(
    (set) => ({
      _id: "",
      properties: {
        inputs: [],
        layout: { header: [[]], body: [[]], footer: [] },
      },
      fontProfile: "CLASSIC",
      spacing: 1,
      color: "blue",
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
      setProperty: (key, value) =>
        set((state) =>
          produce(state, (draftState) => {
            draftState[key] = value;
          })
        ),
      setColorProfile: (value) => set({ color: value }),
      setFontProfile: (value) => set({ fontProfile: value }),
      setSpacing: (value) => set({ spacing: value }),
    }),
    "Resume"
  )
);

export default useResumeStore;
