import create from "zustand";
import { devtools } from "zustand/middleware";
import { ResumeStore } from "./types";

const useResumeStore = create<ResumeStore>(
  devtools(
    (set) => ({
      id: "",
      profileName: "",
      setProfileName: (value) => set({ profileName: value }),
      privacy: { isPublic: false, isClonable: false },
      togglePrivacy: (key: "isPublic" | "isClonable") =>
        set((state) => ({
          privacy: { ...state.privacy, [key]: !state.privacy[key] },
        })),
      properties: { inputs: [], layout: { header: [], body: [], footer: [] } },
      setProperties: (value) => set({ properties: value }),
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
      fontProfile: "CLASSIC",
      setFontProfile: (value) => set({ fontProfile: value }),
      spacing: 1,
      setSpacing: (value) => set({ spacing: value }),
      color: "blue",
      setColorProfile: (value) => set({ color: value }),
      customSections: [],
      setCustomSections: (value) => set({ customSections: value }),
    }),
    "Resume"
  )
);

export default useResumeStore;
