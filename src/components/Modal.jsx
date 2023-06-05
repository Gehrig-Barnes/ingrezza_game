import React, { useState } from "react";
import questionData from "../questionData.js";
function Modal({ closeModal }) {
  const [data, setData] = useState(questionData);
  const [questIndex, setQuestIndex] = useState(0);
  const [next, setNext] = useState(false);

  function setNextToTrue(){
    
    if(next === false){
        setNext(true)
    }
  
    
  }

  function setNextToFalse(){
    if(questIndex === 4) return;
    if(next === true){
        setNext(false)
    }
    setQuestIndex(prev => prev + 1)
  }
  return (
    <div id="modal">
      <div id="modalHeader">
        <h2 id="modalHeadText">
          Take the TD Challenge: Assessment and diagnosis
        </h2>
        {next ? (
          <button onClick={setNextToFalse}id="next">
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
            <img
              src="https://media.istockphoto.com/id/1297460438/vector/funny-comic-cartoon-brain-character-with-magnifier.jpg?s=612x612&w=0&k=20&c=gbQswIYSDpCOpdnbp9nkTHczmer0rNAINOIeZoHx7zM="
              alt="brain_image"
              id="quizImage"
            />
            <div className="question">
              <p id="whichQuestion">Question {questIndex + 1} of 5</p>
              <p id="tf">
                <b>TRUE OR FALSE:</b>
              </p>
              <p id="quest">{data[questIndex].question}</p>
            </div>
            <div id="trueOrFalse">
              <button onClick={setNextToTrue}id="true">
                <b>TRUE</b>
              </button>
              <button onClick={setNextToTrue}id="false">
                <b>FALSE</b>
              </button>
            </div>
            <img
              src="https://i.makeagif.com/media/2-15-2023/ww83wG.gif"
              alt="question_image"
              id="gifImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
