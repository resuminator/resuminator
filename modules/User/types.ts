export interface ResumeMetadata {
  id: string;
  profileName?: string;
  webId?: string;
  icon?: string;
  isPublic: boolean;
  isTemplate?: boolean;
  color?: string;
}

export interface UserObject {
  _id: string;
  isBanned: 0 | 1 | 2;
  fullName: string;
  email: string;
  image: string;
  active: Array<ResumeMetadata>;
}

export type User = Array<UserObject>;

export interface UserStore extends UserObject {
  setProperty: (key: string, value: any) => void;
  updateActive: (id: string, key: string, value: any) => void;
}
