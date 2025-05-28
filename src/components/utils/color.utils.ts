export type ColorVariant = {
  background: string;
  text: string;
};

export type ColorIndex = {
  white: "white";
  black: "black";
  gray: "gray";
  green: "green";
  pink: "pink";
  transparent: "transparent";
};

export type ColorValue =
  | "white"
  | "black"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "transparent";

export type TypeColorVariants = {
  variant: ColorVariant;
  index: ColorIndex;
  value: Record<ColorValue, string>;
};

export const variant: TypeColorVariants = {
  variant: {
    background: "bg",
    text: "text",
  },
  index: {
    white: "white",
    black: "black",
    gray: "gray",
    green: "green",
    pink: "pink",
    transparent: "transparent",
  },
  value: {
    white: "white",
    black: "black",
    "100": "100",
    "200": "200",
    "300": "300",
    "400": "400",
    "500": "500",
    "600": "600",
    "700": "700",
    "800": "800",
    "900": "900",
    transparent: "transparent",
  },
};

// Exemplo de uso correto:
const colorClass = `${variant.variant.background}-${variant.index.green}-${variant.value["500"]}`;
console.log(colorClass); // "background-green-500"

// types.ts (ou parte superior do colorUtils.ts)

export type VariantType = keyof ColorVariant; // 'background' | 'text'
export type ColorIndexKey = keyof ColorIndex; // 'white' | 'black' | ...
export type ColorShade = Exclude<ColorValue, "white" | "black" | "transparent">;
export type State = "base" | "hover" | "focus" | "active" | "disabled";

// ✅ Função utilitária com suporte a estados
export const getColorClass = (
  variantType: VariantType,
  color: ColorIndexKey,
  shade: ColorShade | "white" | "black" | "transparent",
  state: State = "base"
): string => {
  const baseClass = `${variant.variant[variantType]}-${variant.index[color]}${
    ["white", "black", "transparent"].includes(shade)
      ? ""
      : `-${variant.value[shade]}`
  }`;

  return state === "base" ? baseClass : `${state}:${baseClass}`;
};

// ✅ Exemplos

console.log(getColorClass("background", "green", "500")); // bg-green-500
console.log(getColorClass("text", "gray", "300", "hover")); // hover:text-gray-300
console.log(getColorClass("background", "black", "black", "focus")); // focus:bg-black
console.log(getColorClass("background", "pink", "100", "disabled")); // disabled:bg-pink-100
