import create from "zustand";
import { devtools } from "zustand/middleware";
import store, { Store } from "../../../store";
import { ProjectDataObject } from "./types";

const useProjectStore = create<Store<ProjectDataObject>>(
  devtools(store, "Project")
);

export default useProjectStore;
