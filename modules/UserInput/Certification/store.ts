import create from "zustand";
import { devtools } from "zustand/middleware";
import store, { Store } from "../../../store";
import { CertificationDataObject } from "./types";

const useCertificationStore = create<Store<CertificationDataObject>>(
  devtools(store, "Certification")
);

export default useCertificationStore;
