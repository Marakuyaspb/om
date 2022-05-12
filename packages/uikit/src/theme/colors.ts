import { Colors } from "./types";

export const baseColors = {
  failure: "#8094AE", // GRAY BLUE
  primary: "#456375", // MUTE BLUE
  primaryBright: "#0098A1", // TURQUOISE
  primaryDark: "#243a57", //
  secondary: "#e5e5e5", // white
  success: "#F7BE2F", // YELLOW
  warning: "#F7BE2F", // YELLOW
};

export const additionalColors = {
  binance: "#F7BE2F",
  overlay: "#452a7a",
  gold: "#FFC700",
  silver: "#e5e5e5",
  bronze: "#E7974D",
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#0d141d", // VERY DARK BLUE
  backgroundDisabled: "#0d141d", // VERY DARK BLUE
  backgroundAlt: "#0d141d", // VERY DARK BLUE
  backgroundAlt2: "#0d141d", // VERY DARK BLUE

  cardBorder: "#142B37", // DARK SEA BLUE
  contrast: "#142B37", // DARK SEA BLUE
  dropdown: "#101924", // DARK BLUE
  dropdownDeep: "#101924", // DARK BLUE

  invertedContrast: "#101924", // DARK BLUE
  input: "#15202F", // RAIN VERY
  inputSecondary: "#15202F", // RAIN VERY
  tertiary: "#15202F", /// RAIN VERY
  text: "#e5e5e5", // white
  textDisabled: "#e5e5e5", // white
  textSubtle: "#8094AE", // GRAY BLUE
  disabled: "#e5e5e5", // white

  gradients: {
    bubblegum: "#0d141d",
    inverseBubblegum: "#0d141d",
    cardHeader: "#15202F",
    blue: "#0d141d",
    violet: "#3453B6",
    violetAlt: "#452A7A",
    gold: "#F7BE2F",
  },
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#0d141d", // VERY DARK BLUE
  backgroundDisabled: "#0d141d", // VERY DARK BLUE
  backgroundAlt: "#0d141d", // VERY DARK BLUE
  backgroundAlt2: "#0d141d", // VERY DARK BLUE

  cardBorder: "#142B37", // DARK SEA BLUE
  contrast: "#142B37", // DARK SEA BLUE
  dropdown: "#101924", // DARK BLUE
  dropdownDeep: "#101924", // DARK BLUE

  invertedContrast: "#101924", // DARK BLUE
  input: "#15202F", // RAIN VERY
  inputSecondary: "#15202F", // RAIN VERY
  tertiary: "#15202F", /// RAIN VERY
  text: "#e5e5e5", // white
  textDisabled: "#e5e5e5", // white
  textSubtle: "#8094AE", // GRAY BLUE
  disabled: "#e5e5e5", // white

  gradients: {
    bubblegum: "#0d141d",
    inverseBubblegum: "#0d141d",
    cardHeader: "#15202F",
    blue: "#6681D9",
    violet: "#3453B6",
    violetAlt: "#452A7A",
    gold: "#F7BE2F",
  },
};
