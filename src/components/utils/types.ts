// types.ts

import type { BorderVariants } from "./border.utils";
import type { ColorVariants } from "./color.utils";
import type { DisplayVariants } from "./display.utils";
import type { LayoutVariants } from "./layout.utils";
import type { PositionVariants } from "./position.utils";
import type { ResponsiveVariants } from "./responsive.utils";
import type { SizeVariants } from "./size.utils";
import type { SkeletonVariants } from "./skeleton-utils";
import type { SpaceVariants } from "./space.utils";
import type { StateVariants } from "./state.utils";
import type { TextVariants } from "./text-utils";

export type TwClassBuilderVariants = ColorVariants &
  SizeVariants &
  BorderVariants &
  PositionVariants &
  DisplayVariants &
  SkeletonVariants &
  LayoutVariants &
  PositionVariants &
  ResponsiveVariants &
  SpaceVariants &
  TextVariants;

export type TwClassBuilderVariantsWithState = TwClassBuilderVariants & {
  states?: StateVariants;
};
