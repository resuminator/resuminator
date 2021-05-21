export interface EducationDataObject extends Object {
  _id: string;
  isHidden: boolean;
  institute?: string;
  location?: string;
  degree?: string;
  stream?: string;
  gradeObtained?: number;
  gradeMax?: number;
  start?: Date;
  end?: Date;
  description?: string;
}
