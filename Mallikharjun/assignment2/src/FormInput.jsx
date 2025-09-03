import React from "react";
import PropTypes from "prop-types";
import styles from "./FormInput.module.css";

export default function FormInput({ label, name, type = "text", value, onChange, placeholder = "", error = "" }) {
  // wrapper div for input field
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}  {/* input label */}
        <input
          name={name}           // input name for identifying field
          type={type}           // input type (text, email, etc.)
          value={value}         // controlled input value
          onChange={onChange}   // update handler
          placeholder={placeholder}    // placeholder text
          className={`${styles.input} ${error ? styles.errorInput : ""}`}  // style input, error style if any
        />
      </label>
      {/* show error message if any */}
      {error && <span className={styles.errorMsg}>{error}</span>}
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,    // text for label
  name: PropTypes.string.isRequired,     // field name
  type: PropTypes.string,                 // input type
  value: PropTypes.string.isRequired,    // controlled value
  onChange: PropTypes.func.isRequired,   // input change event
  placeholder: PropTypes.string,          // optional placeholder
  error: PropTypes.string,                // optional error message
};
