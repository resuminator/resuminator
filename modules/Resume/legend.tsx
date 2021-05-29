import { FontProfile, SpacingProfile } from "../../store/types";

export const getSpacingFactor = (profile: SpacingProfile) => {
  switch (profile) {
    case "COMPACT":
      return 0.5;
    case "NORMAL":
      return 1;
    case "AIRY":
      return 2;
    default:
      return 1;
  }
};
