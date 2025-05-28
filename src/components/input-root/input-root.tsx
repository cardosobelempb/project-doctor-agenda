import { clsx } from "clsx";
import type { InputHTMLAttributes } from "react";

import { ElementRoot } from "../element-root/element-root";
import type { ElementRootProps } from "../utils/element.type";

export type InputRootProps = ElementRootProps &
  InputHTMLAttributes<HTMLInputElement | HTMLFormElement> & {};

export const InputRoot: React.FunctionComponent<InputRootProps> = ({
  label,
  error,
  className,
  size,
  font,
  leading,
  disabled,
  isFocus,
  px = "px-1",
  pb,
  w,
  children,
  ...props
}) => {
  const baseClasses = clsx(
    "border-b border-gray-200 bg-transparent outline-none outline-none transition-colors group relative",
    isFocus && "focus:border-pink-500",
    label,
    error,
    disabled && "pointer-events-none opacity-60",
    px,
    pb,
    font,
    leading,
    size,
    className,
    w
  );
  const id = props.id || `input-${Math.random().toString(36).substr(2, 9)}`;
  return (
    <>
      <div className={`relative ${w && w}`}>
        {label && (
          <label htmlFor={id} className="text-gray-700 text-sm">
            {label}
          </label>
        )}

        <ElementRoot as="input" className={baseClasses} {...props} />

        {children}

        {error && <span className="text-pink-500 text-xs">{error}</span>}
      </div>
    </>
  );
};
