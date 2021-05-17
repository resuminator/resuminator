import { Content } from "@tiptap/core";

export interface ExperienceDataObject {
  _id?: string;
  jobTitle?: string;
  company?: string;
  location?: string;
  description?: Content;
  link?: string;
  tags?: Array<string>;
  start?: Date;
  end?: Date;
  isHidden?: boolean;
}

export type DataState = Array<ExperienceDataObject>;

export interface ExperienceState {
  data: DataState;
  add: (obj: ExperienceDataObject) => void;
  update: (index: number, key: string, value: any) => void;
  toggleVisibility: (index: number) => void;
}
