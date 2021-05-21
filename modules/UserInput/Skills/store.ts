import create from "zustand";
import { devtools } from "zustand/middleware";
import skillStore from "../../../store/skill.store";
import { SkillStore } from "../../../store/types";
import { SkillDataObject } from "./types";

const useSkillStore = create<SkillStore<SkillDataObject>>(
  devtools(skillStore, "Skills")
);

export default useSkillStore;
