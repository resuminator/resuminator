import { IconType } from "react-icons/lib";

export type Services =
  | "LinkedIn"
  | "Twitter"
  | "GitHub"
  | "Email"
  | "Phone"
  | "Portfolio"
  | "Custom"
  | string;
export interface SocialHandleObject {
  label: Services | string;
  icon?: IconType;
}

export interface ContactDataObject {
  label: Services | string;
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
