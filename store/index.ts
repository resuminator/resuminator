import { GetState, SetState } from "zustand";
import { updateArray } from "../utils";

export interface Store<ObjectType> {
  isDisabled: boolean;
  toggleDisabled: () => void;
  data: Array<ObjectType>;
  setData?: (list: Array<ObjectType>) => void;
  add: (obj: ObjectType) => void;
  update: (index: number, key: string, value: any) => void;
}

const store = <ObjectType>(
  set: SetState<Store<ObjectType>>,
  get: GetState<Store<ObjectType>>
): Store<ObjectType> => ({
  isDisabled: false,
  toggleDisabled: () => set((state) => ({ isDisabled: !state.isDisabled })),
  //Data array which comes from the server.
  data: [],
  setData: (list) => set({ data: list }),
  //Adds a new object to array (a dummy function for now).
  //TODO: This will be converted to add new object on the server and then return and set the data state.
  add: (obj) => set((state) => ({ data: [...state.data, obj] })),
  //Updates an object at a particular index with a key and value pair.
  update: (index, key, value) => {
    const obj = { ...get().data[index], [key]: value };
    set((state) => ({ data: updateArray(state.data, index, obj) }));
  },
  //TODO: Add delete action for server.
});

export default store;
