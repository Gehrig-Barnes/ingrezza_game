import React, { useState } from "react";
import questionData from "../questionData.js";
import { isDisabled } from "@testing-library/user-event/dist/utils";
function Modal({ closeModal }) {
  const [data, setData] = useState(questionData);
  const [questIndex, setQuestIndex] = useState(0);
  const [next, setNext] = useState(false);
  const [total, setTotal] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [falseFeedBack, setFalseFeedBack] = useState("FALSE");
  const [trueFeedBack, setTrueFeedBack] = useState("TRUE");

  function handleTrueClick(e) {
    const value = e.target.value;
    const wrongTrue = "TRUE X";
    const correctTrue = "TRUE ✔";

    if (data[questIndex].answer === value) {
      setTrueFeedBack(correctTrue);
      setTotal(prev => prev+=1)
    } else {
      setTrueFeedBack(wrongTrue);
    }
    setIsDisabled(true);
    if (next === false) {
      setNext(true);
    }
  }

  function handleFalseClick(e) {
    const value = e.target.value;
    const wrongFalse = "FALSE X";
    const correctFalse = "FALSE ✔";
    if (data[questIndex].answer === value) {
      setFalseFeedBack(correctFalse);
      setTotal(prev => prev+=1)
    } else {
      setFalseFeedBack(wrongFalse);
    }
    setIsDisabled(true);
    if (next === false) {
      setNext(true);
    }
  }

  console.log(total)
  function setNextToFalse() {
    if (questIndex === 4) return;
    setIsDisabled(false);
    setFalseFeedBack("FALSE");
    setTrueFeedBack("TRUE");
    if (next === true) {
      setNext(false);
    }
    setQuestIndex((prev) => prev + 1);
  }
  return (
    <div id="modal">
      <div id="modalHeader">
        <h2 id="modalHeadText">
          Take the TD Challenge: Assessment and diagnosis
        </h2>
        {next ? (
          <button onClick={setNextToFalse} id="next">
            <b>NEXT QUESTION</b>
          </button>
        ) : null}
        <span className="close" onClick={closeModal}>
          &times;
        </span>
      </div>
      <div className="modal-overlay" onClick={closeModal}></div>
      <div className="modal-wrapper">
        <div className="modal-content">
          <div className="grid-container">
            <div id="logo_box">
              <img
                src="https://media.istockphoto.com/id/1297460438/vector/funny-comic-cartoon-brain-character-with-magnifier.jpg?s=612x612&w=0&k=20&c=gbQswIYSDpCOpdnbp9nkTHczmer0rNAINOIeZoHx7zM="
                alt="brain_image"
                id="quizImage"
              />
            </div>
            <div className="question">
              <p id="whichQuestion">Question {questIndex + 1} of 5</p>
              <p id="tf">
                <b>TRUE OR FALSE:</b>
              </p>
              <p id="quest">{data[questIndex].question}</p>
            </div>
            <div id="trueOrFalse">
              <button
                onClick={handleTrueClick}
                id="true"
                value="true"
                disabled={isDisabled}
              >
                {trueFeedBack}
              </button>
              <button
                onClick={handleFalseClick}
                id="false"
                value="false"
                disabled={isDisabled}
              >
                {falseFeedBack}
              </button>
            </div>
            <div id="gifContainer">
              <img
                src={data[questIndex].gif}
                alt="question_image"
                id="gifImage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
