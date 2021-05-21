import { GetState, SetState } from "zustand";
import { updateArray } from "../utils";

export interface ContactStore<T> {
  fullName: string;
  jobTitle: string;
  contact: Array<T>;
  add: (obj: T) => void;
  update: (index: number, key: string, value: any) => void;
  setFullName: (value: string) => void;
  setJobTitle: (value: string) => void;
}

const contactStore = <ContactObjectType>(
  set: SetState<ContactStore<ContactObjectType>>,
  get: GetState<ContactStore<ContactObjectType>>
): ContactStore<ContactObjectType> => ({
  fullName: "",
  jobTitle: "",
  contact: [],
  add: (obj) => set((state) => ({ contact: [...state.contact, obj] })),
  update: (index, key, value) => {
    const obj = { ...get().contact[index], [key]: value };
    set((state) => ({ contact: updateArray(state.contact, index, obj) }));
  },
  setFullName: (value) => set({ fullName: value }),
  setJobTitle: (value) => set({ jobTitle: value }),
});

export default contactStore;
