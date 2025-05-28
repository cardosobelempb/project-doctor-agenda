// text-utils.ts
import type { JSX } from "react";
// --- BASE CONFIG ---
export const TEXT_CONFIG = {
  textSize: [
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
  textWeight: [
    "font-thin",
    "font-light",
    "font-normal",
    "font-medium",
    "font-semibold",
    "font-bold",
    "font-extrabold",
    "font-black",
  ] as const,
  textAlign: [
    "text-left",
    "text-center",
    "text-right",
    "text-justify",
    "text-start",
    "text-end",
  ] as const,
  textTransform: [
    "uppercase",
    "lowercase",
    "capitalize",
    "normal-case",
  ] as const,
  textStyle: ["italic", "not-italic"] as const,
} as const;

// --- TIPOS ---
export type TextSize = (typeof TEXT_CONFIG.textSize)[number];
export type TextWeight = (typeof TEXT_CONFIG.textWeight)[number];
export type TextAlign = (typeof TEXT_CONFIG.textAlign)[number];
export type TextTransform = (typeof TEXT_CONFIG.textTransform)[number];
export type TextStyle = (typeof TEXT_CONFIG.textStyle)[number];

// --- VARIANT TYPE ---
export type TextVariants = Partial<{
  as: keyof JSX.IntrinsicElements;
  textSize: TextSize;
  textWeight: TextWeight;
  textAlign: TextAlign;
  textTransform: TextTransform;
  textStyle: TextStyle;
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
