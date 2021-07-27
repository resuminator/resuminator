import produce from "immer";
import create, { GetState, SetState } from "zustand";
import { devtools } from "zustand/middleware";
import { updateArray } from "../../../utils";
import { ContactDataObject, ContactStore } from "./types";

const contactStore = <T>(
  set: SetState<ContactStore<T>>,
  get: GetState<ContactStore<T>>
): ContactStore<T> => ({
  fullName: "",
  jobTitle: "",
  userImage: "",
  contact: [],
  add: (obj) => set((state) => ({ contact: [...state.contact, obj] })),
  update: (index, key, value) => {
    const obj = { ...get().contact[index], [key]: value };
    set((state) => ({ contact: updateArray(state.contact, index, obj) }));
  },
  setProperty: (key, value) =>
    set((state) =>
      produce(state, (draftState) => {
        draftState[key] = value;
      })
    ),
});

const useContactStore = create<ContactStore<ContactDataObject>>(
  devtools(contactStore, "Contact")
);

export default useContactStore;
