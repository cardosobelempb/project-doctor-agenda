// position-utils.ts

// Posicionamentos suportados
export const POSITION_VALUES = [
  "static",
  "relative",
  "absolute",
  "fixed",
  "sticky",
] as const;

export type PositionValue = (typeof POSITION_VALUES)[number];

// Valores de inset (top, right, bottom, left, inset-x, inset-y, inset)
export const INSET_VALUES = [
  "0",
  "auto",
  "px",
  "0.5",
  "1",
  "1.5",
  "2",
  "2.5",
  "3",
  "3.5",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "14",
  "16",
  "20",
  "24",
  "28",
  "32",
  "36",
  "40",
  "44",
  "48",
  "52",
  "56",
  "60",
  "64",
  "72",
  "80",
  "96",
] as const;

export type InsetValue = (typeof INSET_VALUES)[number];

// Tipos para propriedades inset com seus prefixos
export type InsetVariants = Partial<{
  inset?: InsetValue;
  insetX?: InsetValue;
  insetY?: InsetValue;
  top?: InsetValue;
  right?: InsetValue;
  bottom?: InsetValue;
  left?: InsetValue;
}>;

// Tipos para z-index (comuns no Tailwind)
export const Z_INDEX_VALUES = ["0", "10", "20", "30", "40", "50"] as const;

export type ZIndexValue = (typeof Z_INDEX_VALUES)[number];

// Tipo para variantes de posição completas
export type PositionVariants = {
  position?: PositionValue;
  inset?: InsetValue;
  insetX?: InsetValue;
  insetY?: InsetValue;
  top?: InsetValue;
  right?: InsetValue;
  bottom?: InsetValue;
  left?: InsetValue;
  zIndex?: ZIndexValue;
};

/**
 * Gera classes de posicionamento conforme variantes.
 * Exemplo:
 * {
 *   position: "absolute",
 *   top: "0",
 *   insetX: "4",
 *   zIndex: "20"
 * }
 * retorna: "absolute top-0 inset-x-4 z-20"
 */
export function getPositionClasses(variants: PositionVariants): string {
  const classes: string[] = [];

  if (variants.position) classes.push(variants.position);

  if (variants.inset) classes.push(`inset-${variants.inset}`);
  if (variants.insetX) classes.push(`inset-x-${variants.insetX}`);
  if (variants.insetY) classes.push(`inset-y-${variants.insetY}`);
  if (variants.top) classes.push(`top-${variants.top}`);
  if (variants.right) classes.push(`right-${variants.right}`);
  if (variants.bottom) classes.push(`bottom-${variants.bottom}`);
  if (variants.left) classes.push(`left-${variants.left}`);

  if (variants.zIndex) classes.push(`z-${variants.zIndex}`);

  return classes.join(" ");
}

/*
Exemplo de uso
import { getPositionClasses } from "./position-utils";

const posClasses = getPositionClasses({
  position: "absolute",
  top: "0",
  insetX: "4",
  zIndex: "20",
});

console.log(posClasses); 
// Output: "absolute top-0 inset-x-4 z-20"

*/
