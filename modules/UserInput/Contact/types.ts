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
