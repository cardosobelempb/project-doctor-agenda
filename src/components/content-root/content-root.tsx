import { clsx } from "clsx";

import { ElementRoot } from "../element-root/element-root";
import type { ElementRootProps } from "../utils/element.type";
import { twClassBuilder } from "../utils/tw-class-builder";

type ContentRootProps = ElementRootProps & {};

export const ContentRoot: React.FunctionComponent<ContentRootProps> = ({
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
      className={clsx("mx-auto", `${classBuilder} ${className}`)}
      {...props}
    >
      {children}
    </ElementRoot>
  );
};
