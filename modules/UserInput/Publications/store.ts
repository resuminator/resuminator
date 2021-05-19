import create from "zustand";
import { devtools } from "zustand/middleware";
import { PublicationDataObject } from "./types";

const updateArray = (
  array: Array<PublicationDataObject>,
  index: number,
  obj: PublicationDataObject
) => [...array.slice(0, index), obj, ...array.slice(index + 1)];

interface PublicationStore {
  isDisabled: boolean;
  toggleDisabled: () => void;
  data: Array<PublicationDataObject>;
  add: (obj: PublicationDataObject) => void;
  update: (index: number, key: string, value: any) => void;
}

const usePublicationStore = create<PublicationStore>(
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
    "Publications"
  )
);

export default usePublicationStore;
