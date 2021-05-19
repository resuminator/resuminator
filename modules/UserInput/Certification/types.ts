export interface CertificationDataObject {
  _id: string;
  isHidden: boolean;
  certificateName?: string;
  authority?: string;
  credentialNumber?: string;
  start?: Date;
  end?: Date;
  link?: string;
}
