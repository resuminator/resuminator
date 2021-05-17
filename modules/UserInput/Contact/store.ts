import create from "zustand";
import { devtools } from "zustand/middleware";
import { ContactData, ContactDataObject } from "./types";

const updateArray = (
  array: ContactData,
  index: number,
  obj: ContactDataObject
) => [...array.slice(0, index), obj, ...array.slice(index + 1)];

interface ContactState {
  data: ContactData;
  add: (obj: ContactDataObject) => void;
  update: (index: number, key: string, value: any) => void;
}

const useContactStore = create<ContactState>(
  devtools(
    (set, get) => ({
      data: [],
      add: (obj) => set((state) => ({ data: [...state.data, obj] })),
      update: (index, key, value) => {
        const obj = { ...get().data[index], [key]: value };
        set((state) => ({ data: updateArray(state.data, index, obj) }));
      },
    }),
    "Contact"
  )
);

export default useContactStore;
