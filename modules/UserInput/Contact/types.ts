import { IconType } from "react-icons/lib";

export type Services =
  | "LinkedIn"
  | "Twitter"
  | "GitHub"
  | "GitLab"
  | "Email"
  | "Phone"
  | "Portfolio"
  | "Behance"
  | "Dribble"
  | "YouTube"
  | "Custom";
export interface SocialHandleObject {
  label: Services;
  icon?: IconType;
}

export interface ContactDataObject {
  label: Services;
  link: string;
  isHidden?: boolean;
  identifier?: string;
}

export type ContactData = Array<ContactDataObject>;

export interface UserContactDataObject {
  fullName?: string;
  jobTitle?: string;
  userImage?: string;
  contact?: ContactData;
}

export interface ContactStore<T> {
  fullName: string;
  jobTitle: string;
  userImage: string;
  contact: Array<T>;
  add: (obj: T) => void;
  update: (index: number, key: string, value: any) => void;
  setContact: (value: Array<T>) => void;
  setUserImage: (value: string) => void;
  setFullName: (value: string) => void;
  setJobTitle: (value: string) => void;
}
