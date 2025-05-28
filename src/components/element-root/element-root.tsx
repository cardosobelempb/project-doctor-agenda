import type { ElementType, ComponentPropsWithoutRef } from "react";
import React from "react";
import type { JSX } from "react";

export type ElementRootProps<T extends ElementType> =
  ComponentPropsWithoutRef<T> & {
    as?: keyof JSX.IntrinsicElements;
  };

export const ElementRoot = <T extends ElementType>({
  as = "span",
  className,
  children,
  ...props
}: ElementRootProps<T>) => {
  return React.createElement(
    as,
    {
      className,
      ...props,
    },
    children
  );
};
