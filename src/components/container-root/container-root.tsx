import { clsx } from "clsx";

import { ElementRoot } from "../element-root/element-root";
import type { ElementRootProps } from "../utils/element.type";

type ContainerRootProps = ElementRootProps & {};

export const ContainerRoot: React.FunctionComponent<ContainerRootProps> = ({
  children,
  className,
  as = "main",
  px,
  py,
  w,
  h,
}) => {
  return (
    <ElementRoot
      as={as}
      className={clsx(
        "w-full px-2 ",
        `${px && px} ${py && py} ${w && w} ${h && h} ${className}`
      )}
    >
      {children}
    </ElementRoot>
  );
};
