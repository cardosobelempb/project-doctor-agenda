// classBuilder.ts

import { BorderVariants, getBorderClasses } from "./border.utils";
// seu módulo de borda
import { ColorVariants, getColorClasses } from "./color.utils";
// seu módulo de cores
import { getPositionClasses, PositionVariants } from "./position.utils";
// seu módulo de posição
import { getSizeClasses, SizeVariants } from "./size.utils";

// seu módulo de tamanho

// Tipo unificado para as variantes combinadas
export type ClassBuilderVariants = ColorVariants &
  SizeVariants &
  BorderVariants &
  PositionVariants;

/**
 * Recebe um objeto com variantes (cores, tamanhos, bordas, posição)
 * e retorna a string concatenada com todas as classes CSS.
 */
export function buildClasses(variants: ClassBuilderVariants): string {
  // Dividir as variantes por grupo para passar às funções certas
  const {
    bg,
    text,
    fill,
    strock, // cores
    w,
    h,
    p,
    px,
    py,
    pb,
    pt, // tamanhos
    b,
    bb,
    be, 
    br,
    bt,
    rounded, // bordas
    position,
    inset,
    insetX,
    insetY,
    top,
    right,
    bottom,
    left,
    zIndex, // posição
  } = variants;

  const colorClasses = getColorClasses({ bg, text, fill, strock });
  const sizeClasses = getSizeClasses({ w, h, p, px, py, pb, pt });
  const borderClasses = getBorderClasses({   b,
    bb,
    be, 
    br,
    bt, rounded });
  const positionClasses = getPositionClasses({
    position,
    inset,
    insetX,
    insetY,
    top,
    right,
    bottom,
    left,
    zIndex,
  });

  // Juntar tudo, ignorando strings vazias
  return [colorClasses, sizeClasses, borderClasses, positionClasses]
    .filter(Boolean)
    .join(" ")
    .trim();
}

/*
Exemplo de uso:
import { buildClasses } from "./classBuilder";

const classes = buildClasses({
  bg: "bg-green-500",
  text: "text-white",
  w: "w-6xl",
  h: "h-80",
  b: "border-2",
  rounded: "rounded-lg",
  position: "absolute",
  top: "0",
  zIndex: "20",
});

console.log(classes);
// "bg-green-500 text-white w-6xl h-80 border-2 rounded-lg absolute top-0 z-20"

Benefícios desse modelo:
DRY: Cada utilitário é modular e reutilizável.
Seguro: Tipos TypeScript validam os valores possíveis.
Extensível: Você pode adicionar mais grupos (flex, grid, spacing extras) facilmente.
Único ponto para montar classes.
*/
