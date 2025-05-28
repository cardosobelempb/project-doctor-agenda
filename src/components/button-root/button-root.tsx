import { clsx } from "clsx";

import { ElementRoot } from "../element-root/element-root";
import { IconRoot } from "../icon-root/icon-root";
import { getColorClasses } from "../utils/color.utils";
import type { ElementRootProps } from "../utils/element.type";

type ButtonRootProps = ElementRootProps & {};

export const ButtonRoot: React.FunctionComponent<ButtonRootProps> = ({
  children,
  className,
  disabled,
  icon,
  bg,
  text,
  fill,
  strock,
  px,
  py,
  h,
  w,
  p,
  ...props
}) => {
  const colorClasses = getColorClasses({
    bg: "bg-gray-100",
    text: "text-gray-500",
  });
  return (
    <ElementRoot
      as="button"
      className={clsx(
        "justify-center flex gap-x-1 group items-center cursor-pointer",
        `${colorClasses} ${p} ${w && w} ${h} ${className}  ${
          disabled
            ? `${colorClasses ? bg : "bg-gray-100/50 hover:bg-gray-100"} ${
                text ? text : "text-gray-500"
              } cursor-not-allowed pointer-events-none `
            : `cursor-pointer ${className}`
        } ${bg && bg} ${text && text} ${px ? px : "px-5"} ${py ? py : "py-4"}`
      )}
      {...props}
    >
      {icon && (
        <IconRoot
          p={p}
          h={h}
          strock={strock}
          fill={fill}
          className="p-1"
          icon={icon}
        />
      )}
      {children}
    </ElementRoot>
  );
};
