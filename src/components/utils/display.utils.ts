// display-utils.ts

export type DISPLAY =
  | "hidden"
  | "block"
  | "inline-block"
  | "inline"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid"
  | "table"
  | "table-row"
  | "table-cell"
  | "contents"
  | "list-item";

export type DisplayVariants = {
  display?: DISPLAY;
};

export function getDisplayClasses(variants: DisplayVariants): string {
  return variants.display ? variants.display : "";
}
