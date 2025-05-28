// state-utils.ts

// Estados mais comuns do Tailwind
export const STATES = [
  "hover",
  "focus",
  "active",
  "disabled",
  "visited",
  "checked",
  "group-hover",
  "focus-within",
  "focus-visible",
] as const;

export type State = (typeof STATES)[number];

/**
 * Mapeia classes por estado.
 * Exemplo:
 * {
 *   hover: ["bg-red-500", "text-white"],
 *   focus: ["ring-2"],
 * }
 */
export type StateVariants = Partial<Record<State, string[]>>;

/**
 * Constrói classes com prefixo de estado.
 * Exemplo:
 * {
 *   hover: ["bg-red-500", "text-white"],
 *   focus: ["ring-2"]
 * } => "hover:bg-red-500 hover:text-white focus:ring-2"
 */
export function getStateClasses(variants: StateVariants): string {
  return Object.entries(variants)
    .flatMap(([state, classes]) =>
      (classes || []).map((cls) => `${state}:${cls}`)
    )
    .join(" ");
}

export const stateUtils = {
  getStateClasses,
};

/*
✅ Exemplo de uso
import { stateUtils } from "@/utils/state-utils";

const stateClasses = stateUtils.getStateClasses({
  hover: ["bg-red-500", "text-white"],
  focus: ["ring-2", "ring-green-500"],
  active: ["scale-95"],
});

console.log(stateClasses);
// Resultado: "hover:bg-red-500 hover:text-white focus:ring-2 focus:ring-green-500 active:scale-95"

🧩 Composição total (exemplo completo)
const base = getSizeClasses({ w: "w-full", h: "h-96" });
const responsive = getResponsiveClasses({ md: ["w-1/2"], lg: ["p-4"] });
const state = getStateClasses({ hover: ["bg-green-500", "text-white"] });

const finalClass = [base, responsive, state].join(" ");

console.log(finalClass);
// => "w-full h-96 md:w-1/2 lg:p-4 hover:bg-green-500 hover:text-white"

 */
