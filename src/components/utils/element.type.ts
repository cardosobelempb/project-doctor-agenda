import type { ComponentPropsWithoutRef, ReactNode } from "react";

import type { JSX } from "react";
import type { IconType } from "react-icons";
import type {
  TypeBackground,
  TypeFill,
  TypeStrock,
  TypeText,
} from "../color.utils";
import type { HEIGTH, P, PB, PT, PX, PY, WIDTH } from "./size.utils";
import type { B, BB, BE, BR, BT, ROUNDEND } from "./border.utils";

export type ElementRootProps<T extends keyof JSX.IntrinsicElements> = {
  label?: string;
  error?: string;
  isChecked?: boolean;
  isFocus?: boolean;
  as?: keyof JSX.IntrinsicElements;
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
  rounded?: ROUNDEND;
  // textSize: TextSize;
  // textWeight: TextWeight;
  // textAlign: TextAlign;
  // textTransform: TextTransform;
  // textStyle: TextStyle;
} & ComponentPropsWithoutRef<T>;
