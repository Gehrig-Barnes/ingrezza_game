import React from "react";
import Answer from "./Answer/Answer";

function ModalContent({
  next,
  setNextToFalse,
  closeModal,
  questIndex,
  data,
  handleFalseClick,
  handleTrueClick,
  isDisabled,
  trueFeedBack,
  falseFeedBack,
  setShowScore,
  showNextButton,
  finalAnswer,
  handleCircleId,
}) {
  function renderGetScore() {
    if (showNextButton) {
      return next ? (
        <button onClick={setNextToFalse} id="next">
          <b>NEXT QUESTION</b>
        </button>
      ) : null;
    } else {
      return (
        <button
          id="next"
          onClick={() => {
            handleCircleId();
            setShowScore(true);
          }}
        >
          <b>GET YOUR SCORE</b>
        </button>
      );
    }
  }
  return (
    <>
      <div id="modalHeader">
        <h2 id="modalHeadText">
          Take the TD Challenge: Assessment and diagnosis
        </h2>
        {renderGetScore()}
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
                value="TRUE"
                disabled={isDisabled}
              >
                {trueFeedBack}
              </button>
              <button
                onClick={handleFalseClick}
                id="false"
                value="FALSE"
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
            {next ? (
              <div id="ansContainer">
                {<Answer data={data} questIndex={questIndex} />}
              </div>
            ) : null}
            {finalAnswer ? (
              <div id="ansContainer">
                {<Answer data={data} questIndex={questIndex} />}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContent;
