// skeleton-utils.ts

// --- Skeleton Config Base ---
export const SKELETON_CONFIG = {
  animation: ["animate-pulse"] as const,
  background: [
    "bg-gray-100",
    "bg-gray-200",
    "bg-gray-300",
    "bg-gray-500",
  ] as const,
  rounded: [
    "rounded",
    "rounded-sm",
    "rounded-md",
    "rounded-lg",
    "rounded-full",
  ] as const,
} as const;

// --- Tipos Dinâmicos ---
type Animation = (typeof SKELETON_CONFIG.animation)[number];
type Background = (typeof SKELETON_CONFIG.background)[number];
type Rounded = (typeof SKELETON_CONFIG.rounded)[number];

export type SkeletonVariants = Partial<{
  animation: Animation;
  background: Background;
  rounded: Rounded;
  w: string; // você pode usar tipos como WIDTH, se quiser tipar
  h: string; // idem para HEIGHT
}>;

// --- Função Utilitária ---
export function getSkeletonClasses(variants: SkeletonVariants): string {
  return Object.entries(variants)
    .map(([, value]) => value)
    .filter(Boolean)
    .join(" ");
}

// --- API Pública ---
export const skeletonUtils = {
  getSkeletonClasses,
};

/*
✅ Exemplo de uso
import { skeletonUtils } from "@/utils/skeleton-utils";

const skeletonClass = skeletonUtils.getSkeletonClasses({
  animation: "animate-pulse",
  background: "bg-gray-200",
  rounded: "rounded-md",
  w: "w-64",
  h: "h-8",
});

console.log(skeletonClass);
// Resultado: "animate-pulse bg-gray-200 rounded-md w-64 h-8"

*/
