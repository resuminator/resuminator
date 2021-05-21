import create from "zustand";
import { devtools } from "zustand/middleware";
import store, { Store } from "../../../store";
import { PublicationDataObject } from "./types";

const usePublicationStore = create<Store<PublicationDataObject>>(
  devtools(store, "Publications")
);

export default usePublicationStore;
