import { clsx } from "clsx";

import { IconRoot } from "../icon-root/icon-root";
import { InputRoot } from "../input-root/input-root";
import type { ElementRootProps } from "../utils/element.type";

export type CheckBoxRootProps = ElementRootProps & {};

export const InputCheckBoxRoot: React.FunctionComponent<CheckBoxRootProps> = ({
  label,
  error,
  className,
  disabled,
  isChecked,
  isFocus,
  strock,
  fill,
  icon,
  h,
  w,
  p = "p-0.5",
}) => {
  const baseClasses = clsx(
    "appearance-none peer flex items-center justify-center border-2 border-green-500 hover:border-green-800 hover:bg-green-800 transition overflow-hidden cursor-pointer rounded",
    className,
    label,
    error,
    isFocus && "focus:border-pink-500 group",
    isChecked &&
      "checked:border-green-500 checked:bg-green-500 group-hover:checked:border-green-800 group-hover:checked:bg-green-800 relative",
    h,
    w
  );

  return (
    <>
      <InputRoot
        className={baseClasses}
        type="checkbox"
        disabled={disabled}
        checked={isChecked}
      >
        {icon && (
          <IconRoot
            strock={strock}
            fill={fill}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden peer-checked:block fill-white"
            icon={icon}
            h={h}
            w={w}
            p={p}
          />
        )}
      </InputRoot>
    </>
  );
};
