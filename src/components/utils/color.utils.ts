// --- BASE CONFIG: shared colors e variantes suportadas ---
const COLOR_NAMES = [
  "white",
  "black",
  "gray-100",
  "gray-200",
  "gray-500",
  "gray-800",
  "green-100",
  "green-500",
  "green-800",
  "pink-100",
  "pink-500",
  "pink-800",
  "transparent",
] as const;

const COLOR_TYPES = ["bg", "text", "fill", "strock"] as const;

// --- TYPE HELPERS ---
type ColorName = (typeof COLOR_NAMES)[number];
type ColorType = (typeof COLOR_TYPES)[number];

// --- UTIL: gerar mapas como bg -> { white: "bg-white", ... } ---
function generateColorVariants(): Record<ColorType, Record<ColorName, string>> {
  const result = {} as Record<ColorType, Record<ColorName, string>>;

  for (const type of COLOR_TYPES) {
    result[type] = COLOR_NAMES.reduce((acc, color) => {
      acc[color] = `${type}-${color}`;
      return acc;
    }, {} as Record<ColorName, string>);
  }

  return result;
}

// --- GERADO AUTOMATICAMENTE ---
export const COLOR_VARIANT = generateColorVariants();

// --- TIPOS INFERIDOS A PARTIR DA ESTRUTURA ---
export type TypeColor = keyof typeof COLOR_VARIANT;
export type TypeColorValue = keyof (typeof COLOR_VARIANT)["bg"];

export type TypeBackground = (typeof COLOR_VARIANT)["bg"][TypeColorValue];
export type TypeText = (typeof COLOR_VARIANT)["text"][TypeColorValue];
export type TypeFill = (typeof COLOR_VARIANT)["fill"][TypeColorValue];
export type TypeStrock = (typeof COLOR_VARIANT)["strock"][TypeColorValue];

export type ColorVariants = {
  bg?: TypeBackground;
  text?: TypeText;
  fill?: TypeFill;
  strock?: TypeStrock;
};

// --- FUNÇÕES UTILITÁRIAS ---
export function getColorClass(
  type: TypeColor,
  value: TypeColorValue
): string | undefined {
  return COLOR_VARIANT[type]?.[value];
}

export function getColorClasses(variants: ColorVariants): string {
  return Object.entries(variants)
    .map(([, value]) => value)
    .filter(Boolean)
    .join(" ");
}

// --- PROVIDER OPCIONAL ---
export type ColorClassProvider = {
  getColorClass: typeof getColorClass;
  getColorClasses: typeof getColorClasses;
};

export const colorUtils: ColorClassProvider = {
  getColorClass,
  getColorClasses,
};

/*
✅ Vantagens do novo color-utils.ts
Recurso	Benefício
COLOR_NAMES centralizado	Facilidade para adicionar cores uma vez só
COLOR_TYPES modular	Você pode facilmente adicionar "outline" ou "border" se quiser
DRY	Nenhuma repetição de strings como "bg-white"
Escalável	Futuro suporte a temas, dark mode, ou variantes customizadas
Tipagem 100% TypeScript	Total segurança ao usar getColorClass e getColorClasses

import { colorUtils } from "./color-utils";

const classes = colorUtils.getColorClasses({
  bg: "bg-green-800",
  text: "text-white",
  fill: "fill-pink-100",
});

console.log(classes); // "bg-green-800 text-white fill-pink-100"

🔄 Extensões futuras possíveis
✅ Dark mode (ex: "dark:bg-white")
✅ Suporte a hover, focus, etc.
✅ Classe arbitrária: bg-[rgba(0,0,0,0.5)]
✅ Configuração com tema dinâmico
*/
