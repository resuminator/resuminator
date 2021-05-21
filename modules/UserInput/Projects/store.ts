import create from "zustand";
import { devtools } from "zustand/middleware";
import store from "../../../store";
import { Store } from "../../../store/types";
import { ProjectDataObject } from "./types";

const useProjectStore = create<Store<ProjectDataObject>>(
  devtools(store, "Project")
);

export default useProjectStore;
