import { SocialHandleObject } from "../../SocialMedia/types";

export interface ContactDataObject extends SocialHandleObject {
  link: string;
  isHidden?: boolean;
}

export type ContactData = Array<ContactDataObject>;
