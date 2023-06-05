import React from "react";
function Modal({ closeModal }) {
  return (
    <div id="modal">
      <div id="modalHeader">
        <h2 id="modalHeadText">Take the TD Challenge: Assessment and diagnosis</h2>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
      </div>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-wrapper">
        <div className="modal-content">
          <h2>Modal Title</h2>
          <p>This is the content of the modal.</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
