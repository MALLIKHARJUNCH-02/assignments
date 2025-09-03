import React from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

export default function Modal({ visible, title, children, onClose }) {
  // don't show anything if not visible
  if (!visible) return null;

  // modal layout
  return (
    <div className={styles.backdrop} onClick={onClose}>
      {/* modal box stops click from closing */}
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <header className={styles.header}>
          <h3>{title}</h3>
          {/* close button */}
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>
        {/* content goes here */}
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,  // show or hide modal
  title: PropTypes.string,              // modal title text
  children: PropTypes.node,             // modal body content
  onClose: PropTypes.func.isRequired,  // close function
};
