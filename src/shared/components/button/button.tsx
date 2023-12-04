import Link from "next/link";
import React from "react";
import classes from "./button.module.css";

type ButtonProps = {
  children?: React.ReactNode;
  link?: string;
  onClick?: () => void;
  text?: string;
  className?: string;
  variant?:
    | "round"
    | "oval"
    | "navigationButton"
    | "sliderButton"
    | "ovalWithDot";
  label?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  link,
  onClick,
  text,
  className,
  variant,
  label,
  ...props
}) => {
  let buttonClasses = `${classes.button}`;
  if (variant) {
    buttonClasses = `${classes.button} ${classes[variant]} ${className || ""}`;
  }
  if (link) {
    return (
      <Link href={link} aria-label={label} className={buttonClasses} {...props}>
        {text && <div className="textClass">{text}</div>}
        <span className={classes.icon}>{children}</span>
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      aria-label={label}
      {...props}
    >
      {text && <div className="textClass">{text}</div>}
      <span className={classes.icon}>{children}</span>
    </button>
  );
};

export default Button;
