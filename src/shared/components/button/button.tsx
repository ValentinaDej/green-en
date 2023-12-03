import React from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant: "round" | "oval";
  color: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  variant,
  color,
  ...props
}) => {
  const buttonClasses = `${classes.button} ${classes[variant]} ${
    className || ""
  }`;
  const buttonStyle = { backgroundColor: `var(--color-${color})` };

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
