import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import "./CSS/StackOverflow.css";

function StackOverflow() {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        {/* <Main questions={questions} /> */}
        <Main />
      </div>
    </div>
  );
}

export default StackOverflow;
