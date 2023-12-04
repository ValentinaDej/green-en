import Link from "next/link";
import React from "react";
import classes from "./button.module.css";
import { ButtonProps } from "../../../../App.types";

const Button = ({
  children,
  link,
  onClick,
  text,
  className,
  variant,
  label,
  ...props
}: ButtonProps) => {
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
