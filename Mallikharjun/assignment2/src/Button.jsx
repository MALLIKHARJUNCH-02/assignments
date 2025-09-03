import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export default function Button({ children, onClick, type = "button", disabled = false, className = "" }) {
  // render a button element
  return (
    <button
      type={type}               // button type (button, submit, reset)
      disabled={disabled}       // disable if true
      onClick={onClick}         // click handler
      className={`${styles.button} ${disabled ? styles.disabled : ""} ${className}`} // css classes
    >
      {children}  {/* button label or content */}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,         // content inside button
  onClick: PropTypes.func,                      // function on click
  type: PropTypes.oneOf(["button", "submit", "reset"]), // button types allowed
  disabled: PropTypes.bool,                     // if button is disabled
  className: PropTypes.string,                  // extra css classes
};
