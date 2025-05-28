// responsive-utils.ts

export const BREAKPOINTS = ["sm", "md", "lg", "xl", "2xl"] as const;

export type Breakpoint = (typeof BREAKPOINTS)[number];

/**
 * Mapeia variantes por breakpoint.
 * Exemplo:
 * {
 *   sm: ["w-full", "text-center"],
 *   md: ["px-4"],
 * }
 */
export type ResponsiveVariants = Partial<Record<Breakpoint, string[]>>;

/**
 * Gera classes responsivas baseadas no mapa de breakpoints.
 * @example
 * getResponsiveClasses({ sm: ["text-center"], md: ["w-full", "px-4"] })
 * => "sm:text-center md:w-full md:px-4"
 */
export function getResponsiveClasses(variants: ResponsiveVariants): string {
  return Object.entries(variants)
    .flatMap(([breakpoint, classes]) =>
      (classes || []).map((cls) => `${breakpoint}:${cls}`)
    )
    .join(" ");
}

export const responsiveUtils = {
  getResponsiveClasses,
};

/*
✅ Exemplo de uso
import { responsiveUtils } from "@/utils/responsive-utils";

const responsiveClasses = responsiveUtils.getResponsiveClasses({
  sm: ["text-center"],
  md: ["w-full", "px-4"],
  lg: ["pt-2"],
});

console.log(responsiveClasses);
// Resultado: "sm:text-center md:w-full md:px-4 lg:pt-2"

*/
