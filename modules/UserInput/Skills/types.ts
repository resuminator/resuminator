import { UpdateAction } from "../../../store/types";

export interface SkillDataObject {
  _id: string;
  isHidden: boolean;
  category: string;
  skillsList: Array<string>;
}

export interface SkillStore<T> {
  format: "CATEGORIES" | "TAGS";
  isDisabled: boolean;
  toggleDisabled: () => void;
  toggleFormat: () => void;
  data: Array<T>;
  setData?: (list: Array<T>) => void;
  add: (obj: T) => void;
  update: UpdateAction;
}

