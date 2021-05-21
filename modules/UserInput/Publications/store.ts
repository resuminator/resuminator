import create from "zustand";
import { devtools } from "zustand/middleware";
import store from "../../../store";
import { Store } from "../../../store/types";
import { PublicationDataObject } from "./types";

const usePublicationStore = create<Store<PublicationDataObject>>(
  devtools(store, "Publications")
);

export default usePublicationStore;
