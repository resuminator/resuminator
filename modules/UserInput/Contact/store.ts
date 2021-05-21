import create from "zustand";
import { devtools } from "zustand/middleware";
import contactStore, { ContactStore } from "../../../store/contact.store";
import { ContactDataObject } from "./types";

const useContactStore = create<ContactStore<ContactDataObject>>(
  devtools(contactStore, "Contact")
);

export default useContactStore;
