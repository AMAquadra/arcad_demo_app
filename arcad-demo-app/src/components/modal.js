import React from "react";
import "../style/modal.scss";

export default function Modal({ children, closeModal }) {
  return (
    <div id="modify-container">
      <div id="black-back" onClick={closeModal} />
      {children}
    </div>
  );
}
