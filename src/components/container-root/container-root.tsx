import { ElementRoot } from "../element-root/element-root";
import type { ElementRootProps } from "../utils/element.type";
import { clsx } from "clsx";

type ContainerRootProps = ElementRootProps & {};

export const ContainerRoot: React.FunctionComponent<ContainerRootProps> = ({
  children,
  className,
  px,
  py,
  w,
  h,
  ...props
}) => {
  return (
    <ElementRoot
      className={clsx(
        "w-full px-2 ",
        `${px && px} ${py && py} ${w && w} ${h && h} ${className}`
      )}
      {...props}
    >
      {children}
    </ElementRoot>
  );
};
