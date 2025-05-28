import { clsx } from "clsx";

import { ElementRoot } from "../element-root/element-root";
import type { ElementRootProps } from "../utils/element.type";
import { twClassBuilder } from "../utils/tw-class-builder";

type BoxRootProps = ElementRootProps & {};

export const BoxRoot: React.FunctionComponent<BoxRootProps> = ({
  children,
  className,
  b,
  bb,
  be,
  br,
  bt,
  bg,
  text,
  fill,
  strock,
  w = "w-lg",
  h,
  p,
  px,
  py,
  pb,
  pt,
  ...props
}) => {
  const classBuilder = twClassBuilder({
    b,
    bb,
    be,
    br,
    bt,
    bg,
    text,
    fill,
    strock,
    w,
    h,
    p,
    px,
    py,
    pb,
    pt,
  });
  return (
    <ElementRoot
      as="div"
      className={clsx(
        "flex gap-x-3 rounded-lg border border-gray-200 bg-white shadow-sm p-5",
        `${classBuilder} ${className}`
      )}
      {...props}
    >
      {children}
    </ElementRoot>
  );
};
