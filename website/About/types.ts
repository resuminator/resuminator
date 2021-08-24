import { Services } from "../../modules/UserInput/Contact/types";

export interface TeamMember {
  image: string;
  fullName: string;
  jobTitle: string;
  bio?: string;
  social?: Array<{ label: Services; link: string }>;
}
