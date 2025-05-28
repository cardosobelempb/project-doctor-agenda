/* Arquivo: layout-utils.ts — flex, justify, items, etc. */

// layout-utils.ts

export type Flex = "flex" | "inline-flex";
export type Justify =
  | "justify-start"
  | "justify-center"
  | "justify-end"
  | "justify-between"
  | "justify-around"
  | "justify-evenly";
export type Items =
  | "items-start"
  | "items-center"
  | "items-end"
  | "items-baseline"
  | "items-stretch";

export type LayoutVariants = {
  flex?: Flex;
  justify?: Justify;
  items?: Items;
};

export function getLayoutClasses(variants: LayoutVariants): string {
  return Object.entries(variants)
    .map(([, value]) => value)
    .filter(Boolean)
    .join(" ");
}

export const layoutUtils = {
  getLayoutClasses,
};
