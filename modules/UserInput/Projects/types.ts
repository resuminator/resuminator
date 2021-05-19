export interface ProjectDataObject {
  _id: string;
  isHidden: boolean;
  projectName?: string;
  additionalInfo?: string;
  start?: Date;
  end?: Date;
  description?: string;
  link?: string;
  tags?: Array<string>;
}
