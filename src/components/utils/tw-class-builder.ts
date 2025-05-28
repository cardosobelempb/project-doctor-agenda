import { getBorderClasses } from "./border.utils";
import { getColorClasses } from "./color.utils";
import { getDisplayClasses } from "./display.utils";
import { getPositionClasses } from "./position.utils";
import { getSizeClasses } from "./size.utils";
import { getSkeletonClasses } from "./skeleton-utils";
import { getStateClasses } from "./state.utils";
import { getTextClasses } from "./text-utils";
import type { TwClassBuilderVariantsWithState } from "./types";

export function twClassBuilder(
  variants: TwClassBuilderVariantsWithState
): string {
  const {
    // color
    bg,
    text,
    fill,
    strock,

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

    //Text
    align, size, style, transform, weight,

    // state
    states,
  } = variants;

  return [
    getColorClasses({ bg, text, fill, strock }),
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
    getTextClasses({align, size, style, transform, weight}),
    getSkeletonClasses({ animation, background, rounded, w, h }),
    states ? getStateClasses(states) : "",
  ]
    .filter(Boolean)
    .join(" ")
    .trim();
}
