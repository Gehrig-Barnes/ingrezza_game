import React, { useState } from "react";
import questionData from "../../../questionData.js";
import Score from "./Score/Score.jsx";
import ModalContent from "./ModalContent/ModalContent.jsx";

function Modal({ closeModal }) {
  const [data, setData] = useState(questionData);
  const [questIndex, setQuestIndex] = useState(0);
  const [next, setNext] = useState(false);
  const [total, setTotal] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [falseFeedBack, setFalseFeedBack] = useState("FALSE");
  const [trueFeedBack, setTrueFeedBack] = useState("TRUE");
  const [showScore, setShowScore] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  function handleTrueClick(e) {
    const value = e.target.value;
    const wrongTrue = "TRUE X";
    const correctTrue = "TRUE ✔";

    if (data[questIndex].answer === value) {
      setTrueFeedBack(correctTrue);
      setTotal((prev) => (prev += 1));
    } else {
      setTrueFeedBack(wrongTrue);
    }
    setIsDisabled(true);
    if (questIndex === 4) {
      setShowNextButton(false);
    } else if (next === false) {
      setNext(true);
    }
  }

  function handleFalseClick(e) {
    const value = e.target.value;
    const wrongFalse = "FALSE X";
    const correctFalse = "FALSE ✔";
    if (data[questIndex].answer === value) {
      setFalseFeedBack(correctFalse);
      setTotal((prev) => (prev += 1));
    } else {
      setFalseFeedBack(wrongFalse);
    }
    setIsDisabled(true);
    if (questIndex === 4) {
      setShowNextButton(false);
    } else if (next === false) {
      setNext(true);
    }
  }

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
      {showScore ? (
        <Score closeModal={closeModal}/>
      ) : (
        <ModalContent
          showNextButton={showNextButton}
          setShowScore={setShowScore}
          next={next}
          setNextToFalse={setNextToFalse}
          closeModal={closeModal}
          questIndex={questIndex}
          data={data}
          handleFalseClick={handleFalseClick}
          handleTrueClick={handleTrueClick}
          isDisabled={isDisabled}
          trueFeedBack={trueFeedBack}
          falseFeedBack={falseFeedBack}
        />
      )}
    </div>
  );
}

export default Modal;
