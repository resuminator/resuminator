import create from "zustand";
import { devtools } from "zustand/middleware";
import contactStore from "../../../store/contact.store";
import { ContactStore } from "../../../store/types";
import { ContactDataObject } from "./types";

const useContactStore = create<ContactStore<ContactDataObject>>(
  devtools(contactStore, "Contact")
);

export default useContactStore;
