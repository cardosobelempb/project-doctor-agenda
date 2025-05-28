/* Arquivo: space-utils.ts — gap, m, mx, my, etc. */

// space-utils.ts

export const SPACE_VALUES = {
  gap: ["0", "0.5", "1", "2", "3", "4", "5", "6"],
  m: ["0", "1", "2", "3", "4", "5"],
  mx: ["0", "1", "2", "3", "4", "5"],
  my: ["0", "1", "2", "3", "4", "5"],
  mt: ["0", "1", "2", "3", "4", "5"],
  mb: ["0", "1", "2", "3", "4", "5"],
} as const;

type SpaceType = keyof typeof SPACE_VALUES;
type SpaceValue<T extends SpaceType> = (typeof SPACE_VALUES)[T][number];
type SpaceClass<T extends SpaceType> = `${T}-${SpaceValue<T>}`;

export type GAP = SpaceClass<"gap">;
export type M = SpaceClass<"m">;
export type MX = SpaceClass<"mx">;
export type MY = SpaceClass<"my">;
export type MT = SpaceClass<"mt">;
export type MB = SpaceClass<"mb">;

export type SpaceVariants = Partial<{
  gap: GAP;
  m: M;
  mx: MX;
  my: MY;
  mt: MT;
  mb: MB;
}>;

export function getSpaceClasses(variants: SpaceVariants): string {
  return Object.entries(variants)
    .map(([, value]) => value)
    .filter(Boolean)
    .join(" ");
}

export const spaceUtils = {
  getSpaceClasses,
};

/*✅ Exemplo de uso 
import {
  colorUtils,
  sizeUtils,
  spaceUtils,
  layoutUtils,
} from "@/utils"; // via `index.ts`

const classes = [
  colorUtils.getColorClasses({ bg: "bg-green-500", text: "text-white" }),
  sizeUtils.getSizeClasses({ w: "w-lg", h: "h-96" }),
  spaceUtils.getSpaceClasses({ gap: "gap-2", mt: "mt-4" }),
  layoutUtils.getLayoutClasses({ flex: "flex", justify: "justify-between" }),
].join(" ");

console.log(classes);
// Resultado: "bg-green-500 text-white w-lg h-96 gap-2 mt-4 flex justify-between"

*/
