/*
    Resuminator, Web App and the Website for Resuminator
    Copyright (C) 2021 Resuminator Authors

    This file is part of Resuminator.

    Resuminator is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Resuminator is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Resuminator.  If not, see <https://www.gnu.org/licenses/>.
*/

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
  | "Dribbble"
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
  setProperty: (key: string, value: string | Array<ContactDataObject>) => void;
}
