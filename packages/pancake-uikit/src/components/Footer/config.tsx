import { Language } from "../LangSelector/types";
import { FooterLinkType, FooterSocialLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Blog",
        href: "https://medium.com/@yokaiswap",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/yokaiswap",
      },
    ],
  },
];

export const socials: FooterSocialLinkType[] = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/yokaiswap",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/zr7u9FJeV5",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/yokaiswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
