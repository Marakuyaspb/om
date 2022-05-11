import { Language } from "../LangSelector/types";
import { TwitterIcon, TelegramIcon } from "../Svg";

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/binancemcc",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    href: "https://t.me/BINANCEMCC",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
