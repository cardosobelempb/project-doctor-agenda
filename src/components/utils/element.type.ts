import type { ComponentPropsWithoutRef, ElementType, JSX, ReactNode } from "react";
import type { IconType } from "react-icons";

import type { B, BB, BE, BR, BT, ROUNDEND } from "./border.utils";
import type {
  TypeBackground,
  TypeFill,
  TypeStrock,
  TypeText,
} from "./color.utils";
import type { HEIGTH, P, PB, PT, PX, PY, WIDTH } from "./size.utils";
import type { TextAlign, TextSize, TextStyle, TextTransform, TextWeight } from "./text-utils";

export type ElementRootProps<T extends ElementType = "span"> = {
  label?: string;
  error?: string;
  isChecked?: boolean;
  isFocus?: boolean;
  as?: keyof JSX.IntrinsicElements | ElementType;
  disabled?: boolean;
  icon?: IconType;
  className?: string;
  children?: ReactNode;
  bg?: TypeBackground;
  text?: TypeText;
  fill?: TypeFill;
  strock?: TypeStrock;
  p?: P;
  px?: PX;
  py?: PY;
  pb?: PB;
  pt?: PT;
  w?: WIDTH;
  h?: HEIGTH;
  b?: B;
  br?: BR;
  be?: BE;
  bb?: BB;
  bt?: BT;
  size: TextSize;
    weight: TextWeight;
    align: TextAlign;
    transform: TextTransform;
    style: TextStyle;
  rounded?: ROUNDEND;
} & ComponentPropsWithoutRef<T>;
