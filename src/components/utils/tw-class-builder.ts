// tw-class-builder.ts

import { getColorClasses } from "../color.utils";
import { getBorderClasses } from "./border.utils";
import { getDisplayClasses } from "./display.utils";
import { getPositionClasses } from "./position.utils";
import { getSizeClasses } from "./size.utils";
import { getSkeletonClasses } from "./skeleton-utils";
import { getStateClasses } from "./state.utils";
import { getTextClasses } from "./text.utils";
import { TwClassBuilderVariantsWithState } from "./types";

export function twClassBuilder(
  variants: TwClassBuilderVariantsWithState
): string {
  const {
    // size
    w,
    h,
    p,
    px,
    py,
    pb,
    pt,

    // border
    b,
    bb,
    be,
    br,
    bt,
    rounded,

    // position
    position,
    inset,
    insetX,
    insetY,
    top,
    right,
    bottom,
    left,
    zIndex,

    // display
    display,

    // skeleton
    animation,
    background,

    // textVariant
    textVariants,

    // colorVariant
    colorVariants,

    // state
    states,
  } = variants;
  return [
    colorVariants ? getColorClasses(colorVariants) : "",
    getSizeClasses({ w, h, p, px, py, pb, pt }),
    getBorderClasses({ b, bb, be, br, bt, rounded }),
    getPositionClasses({
      position,
      inset,
      insetX,
      insetY,
      top,
      right,
      bottom,
      left,
      zIndex,
    }),
    getDisplayClasses({ display }),
    getTextClasses(textVariants ?? {}),
    getSkeletonClasses({ animation, background, rounded, w, h }),
    states ? getStateClasses(states) : "",
  ]
    .filter(Boolean)
    .join(" ")
    .trim();
}
