import type { ComponentPropsWithoutRef,ElementType } from "react";
import React from "react";

export type ElementRootProps<T extends ElementType = "span"> =
  ComponentPropsWithoutRef<T> & {};

export const ElementRoot = <T extends ElementType = "span">({
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
