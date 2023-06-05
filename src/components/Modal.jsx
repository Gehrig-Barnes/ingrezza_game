import React from "react";
function Modal({ closeModal }) {
  return (
    <div id="modal">
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-wrapper">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2>Modal Title</h2>
          <p>This is the content of the modal.</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
