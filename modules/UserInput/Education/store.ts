import create from "zustand";
import { devtools } from "zustand/middleware";
import { EducationDataObject } from "./types";

const updateArray = (
  array: Array<EducationDataObject>,
  index: number,
  obj: EducationDataObject
) => [...array.slice(0, index), obj, ...array.slice(index + 1)];

type DataArray = Array<EducationDataObject>;

interface EducationStore {
  isDisabled: boolean;
  toggleDisabled: () => void;
  data: DataArray;
  setData?: (list: DataArray) => void;
  add: (obj: EducationDataObject) => void;
  update: (index: number, key: string, value: any) => void;
}

const useEducationStore = create<EducationStore>(
  devtools(
    (set, get) => ({
      isDisabled: false,
      toggleDisabled: () => set((state) => ({ isDisabled: !state.isDisabled })),
      data: [],
      setData: (list) => set({ data: list }),
      add: (obj) => set((state) => ({ data: [...state.data, obj] })),
      //Updates an object at a particular index with a key and value pair.
      update: (index, key, value) => {
        const obj = { ...get().data[index], [key]: value };
        set((state) => ({ data: updateArray(state.data, index, obj) }));
      },
    }),
    "Education"
  )
);

export default useEducationStore;
