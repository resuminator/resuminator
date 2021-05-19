import create from "zustand";
import { devtools } from "zustand/middleware";
import { CertificationDataObject } from "./types";

const updateArray = (
  array: Array<CertificationDataObject>,
  index: number,
  obj: CertificationDataObject
) => [...array.slice(0, index), obj, ...array.slice(index + 1)];

interface CertificationStore {
  isDisabled: boolean;
  toggleDisabled: () => void;
  data: Array<CertificationDataObject>;
  add: (obj: CertificationDataObject) => void;
  update: (index: number, key: string, value: any) => void;
}

const useCertificationStore = create<CertificationStore>(
  devtools(
    (set, get) => ({
      isDisabled: false,
      toggleDisabled: () => set((state) => ({ isDisabled: !state.isDisabled })),
      data: [],
      add: (obj) => set((state) => ({ data: [...state.data, obj] })),
      //Updates an object at a particular index with a key and value pair.
      update: (index, key, value) => {
        const obj = { ...get().data[index], [key]: value };
        set((state) => ({ data: updateArray(state.data, index, obj) }));
      },
    }),
    "Certification"
  )
);

export default useCertificationStore;
