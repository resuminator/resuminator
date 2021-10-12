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

type InputID = CustomSectionInputObject["_id"];

export type CustomSectionInputObject = {
  _id: string;
  type: "TEXT" | "DATE" | "DESC";
  name: string;
};

export type DateValue = { start: Date; end: Date };
type valueTypes = string & DateValue;

export type CustomSectionDataObject = {
  _id: string;
  isHidden?: boolean;
  values: { [key in InputID]: valueTypes };
};

export interface CustomSectionObject {
  _id: string;
  header: string;
  hasTitleRow?: boolean;
  inputs?: Array<CustomSectionInputObject>;
  data?: Array<CustomSectionDataObject>;
  layout: Array<Array<InputID>>;
}

export interface Store {
  sections: Array<CustomSectionObject>;
  setSections: (value: Array<CustomSectionObject>) => void;
  addSection: (value: CustomSectionObject) => void;
  deleteSection: (sectionId: string) => void;
  updateSections: (sectionId: string, key: string, value: any) => void;
  addData?: (sectionId: string, value: CustomSectionDataObject) => void;
  deleteData?: (sectionId: string, id: string) => void;
  updateData?: (
    sectionId: string,
    id: string,
    key: CustomSectionInputObject["_id"],
    value: any
  ) => void;
  toggleDataVisibility: (sectionId: string, id: string) => void;
}
