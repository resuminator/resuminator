import create from "zustand";
import { devtools } from "zustand/middleware";
import { ContactData, ContactDataObject } from "./types";

const updateArray = (
  array: ContactData,
  index: number,
  obj: ContactDataObject
) => [...array.slice(0, index), obj, ...array.slice(index + 1)];

interface ContactState {
  fullName: string;
  jobTitle: string;
  contact: ContactData;
  add: (obj: ContactDataObject) => void;
  update: (index: number, key: string, value: any) => void;
  setFullName: (value: string) => void;
  setJobTitle: (value: string) => void;
}

const useContactStore = create<ContactState>(
  devtools(
    (set, get) => ({
      fullName: "",
      jobTitle: "",
      contact: [],
      add: (obj) => set((state) => ({ contact: [...state.contact, obj] })),
      update: (index, key, value) => {
        const obj = { ...get().contact[index], [key]: value };
        set((state) => ({ contact: updateArray(state.contact, index, obj) }));
      },
      setFullName: (value) => set({ fullName: value }),
      setJobTitle: (value) => set({ jobTitle: value }),
    }),
    "Contact"
  )
);

export default useContactStore;
