export type UpdateAction = (index: number, key: string, value: any) => void;

export interface Store<ObjectType> {
  isDisabled: boolean;
  toggleDisabled: () => void;
  data: Array<ObjectType>;
  setData?: (list: Array<ObjectType>) => void;
  add: (obj: ObjectType) => void;
  update: UpdateAction;
}

export interface ContactStore<T> {
  fullName: string;
  jobTitle: string;
  contact: Array<T>;
  add: (obj: T) => void;
  update: (index: number, key: string, value: any) => void;
  setFullName: (value: string) => void;
  setJobTitle: (value: string) => void;
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
