import { clsx } from "clsx";

import { ElementRoot } from "../element-root/element-root";
import type { ElementRootProps } from "../utils/element.type";

type BadgeRootProps = ElementRootProps & {};

export const BadgeRoot: React.FunctionComponent<BadgeRootProps> = ({
  children,
  className,
  as = "div",
  size = "text-xs",
  font = "font-bold",
}) => {
  return (
    <ElementRoot
      as={as}
      className={clsx(
        "flex justify-center items-center px-1 rounded-full",
        `${size && size} ${font && font} ${className}`
      )}
      // size={size}
    >
      {children}
    </ElementRoot>
  );
};
