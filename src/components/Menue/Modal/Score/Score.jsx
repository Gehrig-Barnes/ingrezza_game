import React from "react";

function Score({ closeModal,total, circleId }) {
  return (
    <>
      <div id="modalHeader">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
      </div>
      <div id="scoreCircle">
        <div class="innerCircle">
          
        </div>

      </div>
      <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="300px"
            height="300px"
          >
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle id={circleId} cx="150" cy="150" r="112.5" stroke-linecap="round" />
          </svg>
    </>
  );
}

export default Score;
