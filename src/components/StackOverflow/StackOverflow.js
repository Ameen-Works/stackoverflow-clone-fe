import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import axios from "axios";
import "./CSS/StackOverflow.css";

function StackOverflow() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestion() {
      await axios
        .get("https://stackoverflow-clone-be.onrender.com/api/question")
        .then((res) => {
          setQuestions(res.data.reverse());
          // console.log(res.data);
        });
    }
    getQuestion();
  }, []);
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        <Sidebar />
        <Main questions={questions} />
        {/* <Main /> */}
      </div>
    </div>
  );
}

export default StackOverflow;
