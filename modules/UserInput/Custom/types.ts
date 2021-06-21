type InputID = CustomSectionInputObject["_id"];

export type CustomSectionInputObject = {
  _id: string;
  type: "TEXT" | "DATE" | "DESC";
  name: string;
};

type valueTypes = string & {start: Date, end: Date};

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
