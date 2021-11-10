import { Language } from "../LangSelector/types";
import { FlexProps } from "../Box";

export type FooterLinkType = {
  label: string;
  items: { label: string; href?: string; isHighlighted?: boolean }[];
};

export type FooterSocialLinkType = {
  label: string;
  icon: string;
  href: string;
  items?: { label: string; href: string }[];
};

export type FooterProps = {
  items: FooterLinkType[];
  buyYOKLabel: string;
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  yokPriceUSD?: number;
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
  hideYOKPrice?: boolean;
} & FlexProps;
