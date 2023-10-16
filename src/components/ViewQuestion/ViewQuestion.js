import React from "react";
import Sidebar from "../StackOverflow/Sidebar";
import MainQuestion from "./MainQuestion";
import "./ViewQuestion.css";

function ViewQuestion() {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        {/* <Main questions={questions} /> */}
        <MainQuestion />
      </div>
    </div>
  );
}

export default ViewQuestion;
