// text-utils.ts

// --- BASE CONFIG ---
export const TEXT_CONFIG = {
  size: [
    "text-xs",
    "text-sm",
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
  ] as const,
  weight: [
    "font-thin",
    "font-light",
    "font-normal",
    "font-medium",
    "font-semibold",
    "font-bold",
    "font-extrabold",
    "font-black",
  ] as const,
  align: [
    "text-left",
    "text-center",
    "text-right",
    "text-justify",
    "text-start",
    "text-end",
  ] as const,
  transform: ["uppercase", "lowercase", "capitalize", "normal-case"] as const,
  style: ["italic", "not-italic"] as const,
} as const;

// --- TIPOS ---
export type TextSize = (typeof TEXT_CONFIG.size)[number];
export type TextWeight = (typeof TEXT_CONFIG.weight)[number];
export type TextAlign = (typeof TEXT_CONFIG.align)[number];
export type TextTransform = (typeof TEXT_CONFIG.transform)[number];
export type TextStyle = (typeof TEXT_CONFIG.style)[number];

// --- VARIANT TYPE ---
export type TextVariants = Partial<{
  size: TextSize;
  weight: TextWeight;
  align: TextAlign;
  transform: TextTransform;
  style: TextStyle;
}>;

// --- UTILITÁRIO ---
export function getTextClasses(variants: TextVariants): string {
  return Object.entries(variants)
    .map(([, value]) => value)
    .filter(Boolean)
    .join(" ");
}

// --- API PÚBLICA ---
export const textUtils = {
  getTextClasses,
};

/*
✅ Exemplo de uso
import { textUtils } from "@/utils/text-utils";

const classes = textUtils.getTextClasses({
  size: "text-lg",
  weight: "font-semibold",
  align: "text-center",
  transform: "uppercase",
  style: "italic",
});

console.log(classes);
// Resultado: "text-lg font-semibold text-center uppercase italic"

*/
