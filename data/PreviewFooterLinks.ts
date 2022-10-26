import { PRIVACY_POLICY } from "./DocLinks";
import { GITHUB_REPO, TWITTER_PROFILE } from "./RefLinks";

export const FooterLinks = [
  {
    id: "create-resume",
    title: "Create a Resume",
    link: "/home"
  },
  // {
  //     id: 'report-user',
  //     title: 'Report User',
  //     link: '/report-user',
  // },
  {
    id: "about",
    title: "About",
    link: "/about"
  },
  {
    id: "privacy",
    title: "Privacy",
    link: PRIVACY_POLICY
  },
  {
    id: "github",
    title: "GitHub",
    link: GITHUB_REPO
  },
  {
    id: "Twitter",
    title: "Twitter",
    link: TWITTER_PROFILE
  }
];
