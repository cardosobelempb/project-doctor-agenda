import { clsx } from "clsx";
import { ElementRoot } from "../element-root/element-root";

import { twClassBuilder } from "../utils";
import type { ReactNode, JSX } from "react";
import type { TwClassBuilderVariantsWithState } from "../utils/types";

type TextRootProps = {
  className?: string;
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  variants?: TwClassBuilderVariantsWithState;
};

export const TextRoot: React.FunctionComponent<TextRootProps> = ({
  variants,
  as = "span",
  children,
  className,
  ...props
}) => {
  const classBuilder = twClassBuilder(variants ?? {});

  return (
    <ElementRoot
      as={as}
      className={clsx("", `${classBuilder} ${className}`)}
      {...props}
    >
      {children}
    </ElementRoot>
  );
};
