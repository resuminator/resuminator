import { GetState, SetState } from "zustand";
import { updateArray } from "../utils";
import { Store } from "./types";

const store = <ObjectType>(
  set: SetState<Store<ObjectType>>,
  get: GetState<Store<ObjectType>>
): Store<ObjectType> => ({
  //Data array which comes from the server.
  data: [],
  setData: (list) => set({ data: list }),
  //Adds a new object to array (a dummy function for now).
  //TODO: This will be converted to add new object on the server and then return and set the data state.
  add: (obj) => set((state) => ({ data: [obj, ...state.data] })),
  //Updates an object at a particular index with a key and value pair.
  update: (index, key, value) => {
    const obj = { ...get().data[index], [key]: value };
    set((state) => ({ data: updateArray(state.data, index, obj) }));
  },
  //TODO: Add delete action for server.
});

export default store;
