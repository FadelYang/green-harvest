import { ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary-button" | "secondary-button";

type ButtonProps = {
  children: ReactNode,
  className?: string,
  variant?: ButtonVariant,
  type?: HTMLButtonElement;
};

const Button = (props: ButtonProps) => {
  const { children, className, variant, type } = props;
  

  return (
    <button
      type={type ? 'button' : type}
      className={clsx(
        'px-6 py-4',
        variant === 'primary-button' ? "primary-button" : "secondary-button",
        className
      )}>{children}</button>
  );
};

export default Button;