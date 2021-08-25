import { IconType } from "react-icons/lib";

export interface FeatureCardProps {
  icon: IconType;
  title: string;
  details: any;
  external?: string;
}
