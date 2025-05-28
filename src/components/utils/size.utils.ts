// size-utils.ts

// --- CONFIGURAÇÕES BASE ---
const SIZE_VALUES = {
  w: [
    "0",
    "auto",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "3xs",
    "2xs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "full",
  ],
  h: [
    "0",
    "auto",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "24",
    "32",
    "40",
    "48",
    "64",
    "80",
    "96",
    "full",
  ],
  p: ["0", "0.5", "1", "2", "3", "4", "5"],
  px: ["0", "1", "2", "3", "4", "5"],
  py: ["0", "1", "2", "3", "4", "5"],
  pb: ["0", "1", "2", "3", "4", "5"],
  pt: ["0", "1", "2", "3", "4", "5"],
} as const;

export const SIZE_TYPES = Object.keys(SIZE_VALUES) as Array<
  keyof typeof SIZE_VALUES
>;

// --- TYPES DINÂMICOS ---
type SizeType = keyof typeof SIZE_VALUES;
type SizeValue<T extends SizeType> = (typeof SIZE_VALUES)[T][number];
type SizeClass<T extends SizeType> = `${T}-${SizeValue<T>}`;

// --- TIPO COMBINADO FINAL ---
export type WIDTH = SizeClass<"w">;
export type HEIGTH = SizeClass<"h">;
export type P = SizeClass<"p">;
export type PX = SizeClass<"px">;
export type PY = SizeClass<"py">;
export type PB = SizeClass<"pb">;
export type PT = SizeClass<"pt">;

export type SizeVariants = Partial<{
  w: WIDTH;
  h: HEIGTH;
  p: P;
  px: PX;
  py: PY;
  pb: PB;
  pt: PT;
}>;

// --- FUNÇÃO PRINCIPAL ---
export function getSizeClasses(variants: SizeVariants): string {
  return Object.entries(variants)
    .map(([, value]) => value)
    .filter(Boolean)
    .join(" ");
}

// --- PROVIDER OPCIONAL ---
export type SizeClassProvider = {
  getSizeClasses: typeof getSizeClasses;
};

export const sizeUtils: SizeClassProvider = {
  getSizeClasses,
};

/**
 ✅ Exemplo de uso
 import { sizeUtils } from "./size-utils";

const classes = sizeUtils.getSizeClasses({
  w: "w-md",
  h: "h-96",
  p: "p-4",
  pt: "pt-2",
});

console.log(classes); // "w-md h-96 p-4 pt-2"

✅ Benefícios
Ponto forte	Vantagem
DRY total	Nenhuma string repetida manualmente
Tipagem forte	Tipos inferidos com base nas configurações
Escalável	Fácil adicionar m, mx, gap, etc.
Modular	Pode dividir entre config.ts, types.ts e utils.ts se quiser
 */
