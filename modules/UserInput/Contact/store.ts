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
  setContact: (value) => set({ contact: value }),
  setUserImage: (value) => set({ userImage: value }),
  setFullName: (value) => set({ fullName: value }),
  setJobTitle: (value) => set({ jobTitle: value }),
});

const useContactStore = create<ContactStore<ContactDataObject>>(
  devtools(contactStore, "Contact")
);

export default useContactStore;
