import React from "react";
import AnsOne from "./allAnswers/AnsOne";
import AnsTwo from "./allAnswers/AnsTwo";
import AnsThree from "./allAnswers/AnsThree";
import AnsFour from "./allAnswers/AnsFour";
import AnsFive from "./allAnswers/AnsFive";

function Answer({ data, questIndex }) {
  function showAnswer() {
    if (data[questIndex].id === 1) {
      return <AnsOne />;
    }
    if (data[questIndex].id === 2) {
      return <AnsTwo />;
    }
    if (data[questIndex].id === 3) {
      return <AnsThree />;
    }
    if (data[questIndex].id === 4) {
      return <AnsFour />;
    }
    if (data[questIndex].id === 5) {
      return <AnsFive />;
    }
  }

  return (
    <div id="answerContent">
      <h3 id="ansH3">{`THE CORRECT RESPONSE IS ${data[questIndex].answer}.`}</h3>
      {showAnswer()}
    </div>
  );
}

export default Answer;
