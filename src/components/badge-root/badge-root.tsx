import { ElementRoot } from "../element-root/element-root";
import type { TextVariants } from "../utils";
import type { ElementRootProps } from "../utils/element.type";
import { clsx } from "clsx";

type BadgeRootProps = ElementRootProps<"div"> & {
  textVariants?: TextVariants;
};

export const BadgeRoot: React.FunctionComponent<BadgeRootProps> = ({
  children,
  className,
}) => {
  return (
    <ElementRoot
      className={clsx(
        "flex justify-center items-center px-1 rounded-full",
        `${className}`
      )}
      // size={size}
    >
      {children}
    </ElementRoot>
  );
};
