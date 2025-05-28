const BORDER_VALUES = ["0", "", "2", "3", "4", "5"] as const;
// const BORDER_DIRECTIONS = ["", "r", "e", "b", "t"] as const;
const ROUNDED_VALUES = ["", "sm", "lg", "full"] as const;

// ✅ 2. Funções auxiliares para gerar strings de classe

function generateBorderClasses(prefix: string) {
  return BORDER_VALUES.map((val) =>
    val === "" ? `${prefix}` : `${prefix}-${val}`
  );
}

function generateRoundedClasses() {
  return ROUNDED_VALUES.map((val) =>
    val === "" ? "rounded" : `rounded-${val}`
  );
}

// ✅ 3. Gerar tipos a partir dos arrays
export type B = (typeof borderClasses)[number];
export type BR = (typeof borderRightClasses)[number];
export type BE = (typeof borderEndClasses)[number];
export type BB = (typeof borderBottomClasses)[number];
export type BT = (typeof borderTopClasses)[number];
export type ROUNDEND = (typeof roundedClasses)[number];

//✅ 4. Geração dinâmica dos arrays de classes
export const borderClasses = generateBorderClasses("border");
export const borderRightClasses = generateBorderClasses("border-r");
export const borderEndClasses = generateBorderClasses("border-e");
export const borderBottomClasses = generateBorderClasses("border-b");
export const borderTopClasses = generateBorderClasses("border-t");
export const roundedClasses = generateRoundedClasses();

/*✅ 5. Tipagem composta + função final */
export type BorderVariants = {
  b?: B;
  br?: BR;
  be?: BE;
  bb?: BB;
  bt?: BT;
  rounded?: ROUNDEND;
};

export function getBorderClasses(variants: BorderVariants): string {
  return Object.entries(variants)
    .map(([, value]) => value)
    .filter(Boolean)
    .join(" ");
}

/*
✅ Exemplo de uso
const example = getBorderClasses({
  b: "border-3",
  br: "border-r-4",
  bb: "border-b",
  rounded: "rounded-sm",
});
// Resultado: "border-3 border-r-4 border-b rounded-sm"

*/
