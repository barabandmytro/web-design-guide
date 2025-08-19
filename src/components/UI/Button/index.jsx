import React from "react";
import "./Button.scss";

function Button({ children, variant = "primary", full = false, ...props }) {
  const classes = [
    "ui-button",
    `ui-button--${variant}`,
    full ? "ui-button--full" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
