import { clsx } from "clsx";

import { ElementRoot } from "../element-root/element-root";
import type { ElementRootProps } from "../utils/element.type";

type SkeletonRootProps = ElementRootProps & {};

export const SkeletonRoot: React.FunctionComponent<SkeletonRootProps> = ({
  className,
  px,
  py,
  w,
  h,
  rounded = "rounded",
  ...props
}) => {
  return (
    <ElementRoot
      as="div"
      className={clsx(
        "animate-pulse bg-gray-100 dark:bg-gray-700",
        `${px && px} ${w && w} ${h && h} ${py && py} ${
          rounded && rounded
        } ${className}`
      )}
      {...props}
    />
  );
};
