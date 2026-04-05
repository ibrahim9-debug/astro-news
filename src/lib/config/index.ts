import type { Link } from "../types";
export const SITE = {
  title: "calmaja",
  description: "Tips mental health, cerita personal, dan panduan hidup tenang untuk kamu yang butuh ruang bernapas.",
  author: "Ibrahim",
  url: "https://calmaja.com",
  github: "",
  locale: "id-ID",
  dir: "ltr",
  charset: "UTF-8",
  basePath: "/",
  postsPerPage: 6,
};
export const NAVIGATION_LINKS: Link[] = [
  {
    href: "/articles",
    text: "Artikel",
  },
];
export const OTHER_LINKS: Link[] = [
  {
    href: "/about",
    text: "Tentang",
  },
  {
    href: "/privacy",
    text: "Privacy Policy",
  },
  {
    href: "/terms",
    text: "Terms of Use",
  },
];
export const SOCIAL_LINKS: Link[] = [
  {
    href: "https://x.com/calmajadotcom",
    text: "Twitter",
    icon: "newTwitter",
  },
];
