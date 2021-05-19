import create from "zustand";
import { devtools } from "zustand/middleware";
import { ProjectDataObject } from "./types";

const updateArray = (
  array: Array<ProjectDataObject>,
  index: number,
  obj: ProjectDataObject
) => [...array.slice(0, index), obj, ...array.slice(index + 1)];

interface Project {
  isDisabled: boolean;
  toggleDisabled: () => void;
  data: Array<ProjectDataObject>;
  add: (obj: ProjectDataObject) => void;
  update: (index: number, key: string, value: any) => void;
}

const useProjectStore = create<Project>(
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
    "Project"
  )
);

export default useProjectStore;
