import create from "zustand";
import { devtools } from "zustand/middleware";
import skillStore, { SkillStore } from "../../../store/skill.store";
import { SkillDataObject } from "./types";

const useSkillStore = create<SkillStore<SkillDataObject>>(
  devtools(skillStore, "Skills")
);

export default useSkillStore;
