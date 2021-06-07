import { GetState, SetState } from "zustand";
import { updateArray } from "../utils";
import { ContactStore } from "./types";

const contactStore = <ContactObjectType>(
  set: SetState<ContactStore<ContactObjectType>>,
  get: GetState<ContactStore<ContactObjectType>>
): ContactStore<ContactObjectType> => ({
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

export default contactStore;
