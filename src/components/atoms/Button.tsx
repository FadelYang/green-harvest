import { ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary-button" | "secondary-button";

type ButtonProps = {
  children: ReactNode,
  className?: string,
  variant?: ButtonVariant,
  type?: HTMLButtonElement,
  paddingSize?: string,
  onClick?: any;
};

const Button = (props: ButtonProps) => {
  const { children, className, variant, type, paddingSize, onClick} = props;
  

  return (
    <button
      onClick={onClick}
      type={type ? 'button' : type}
      className={clsx(
        paddingSize ? paddingSize : 'px-6 py-4',
        variant === 'primary-button' ? "primary-button" : "secondary-button",
        className
      )}>{children}</button>
  );
};

export default Button;