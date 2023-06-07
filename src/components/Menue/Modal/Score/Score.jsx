import React from "react";

function Score({ closeModal, total, circleId }) {
  return (
    <>
      <div id="modalHeader">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
      </div>
      <h1 id="completed">You’ve completed the TD Challenge: Assessment and diagnosis</h1>
      <button id="exit"><b>EXIT QUIZ</b></button>
      <div id="scoreCircle">
        <div class="innerCircle">
          <h1 id="final_score">{total}/5 correct</h1>
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
            <stop offset="0%" stop-color="#fcfafb" />
            <stop offset="100%" stop-color="#fcfafb" />
          </linearGradient>
        </defs>
        <circle
          id={circleId}
          cx="150"
          cy="150"
          r="112.5"
          stroke-linecap="round"
        />
      </svg>
    </>
  );
}

export default Score;
