import { UpdateAction } from "../../../store/types";

export type SkillDisplayStyle = "CATEGORIES" | "TAGS"

export interface SkillDataObject {
  _id: string;
  isHidden: boolean;
  category: string;
  skillsList: Array<string>;
}

export interface SkillStore<T> {
  format: SkillDisplayStyle;
  toggleFormat: () => void;
  setFormat: (value: SkillDisplayStyle) => void;
  data: Array<T>;
  setData?: (list: Array<T>) => void;
  add: (obj: T) => void;
  update: UpdateAction;
}
