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

export interface ResumeMetadata {
  _id: string;
  profileName?: string;
  webId?: string;
  icon?: string;
  isPublic: boolean;
  isTemplate?: boolean;
  color?: string;
}

export interface UserObject {
  _id: string;
  isBanned: number;
  active: Array<ResumeMetadata>;
}

export type User = Array<UserObject>;

export interface UserStore extends UserObject {
  setProperty: (key: string, value: any) => void;
  updateActive: (id: string, key: string, value: any) => void;
}
