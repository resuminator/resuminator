type InputID = CustomSectionInputObject["_id"];

export type CustomSectionInputObject = {
  _id: string;
  type: "TEXT" | "DATE" | "DESC";
  name: string;
};

export type CustomSectionDataObject = {
  _id: string;
  isHidden?: boolean;
  values: { [key in InputID]: string | Date };
};

export interface CustomSectionObject {
  _id: string;
  header: string;
  hasTitleRow?: boolean;
  inputs?: Array<CustomSectionInputObject>;
  data?: Array<CustomSectionDataObject>;
  layout: Array<Array<InputID>>;
}

export interface CustomSectionStore<CustomSectionObject> {
  sections: Array<CustomSectionObject>;
  setSections: (value: Array<CustomSectionObject>) => void;
  updateData: (id: string, value: Array<CustomSectionDataObject>) => void;
}
