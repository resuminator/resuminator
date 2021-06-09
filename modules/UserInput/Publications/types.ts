export interface PublicationDataObject {
  _id: string;
  isHidden: boolean;
  authorNames?: string;
  articleTitle?: string;
  journalName?: string;
  volumeNumber?: string;
  issueNumber?: string;
  year?: string;
  pages?: string;
  format?: "MLA" | "APA";
  doi?: string;
}
