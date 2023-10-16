import React from "react";
import { Link } from "react-router-dom";
import "./CSS/AllQuestion.css";
import { Avatar } from "@mui/material";
import { stringAvatar } from "../../utils/Avatar";

function AllQuestions() {
  let tags = ["React", "FSD", "Test1", "Test2"];
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              {/* <p>{data?.answerDetails?.length}</p> */}
              <p>11</p>
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          {/* <Link to={`/question?q=${data?._id}`}>{data.title}</Link> */}
          <Link to={`/question/123`}>Question title...</Link>

          {/* <a href=>{data.title}</a> */}

          <div
            style={{
              maxWidth: "90%",
            }}
          >
            {/* <div>{ReactHtmlParser(truncate(data.body, 200))}</div> */}
            <div>Question description</div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            {tags.map((_tag) => (
              <p
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {_tag}
              </p>
            ))}
          </div>
          <div className="author">
            {/* <small>{data.create_at}</small> */}
            <small>10/10/2023</small>
            <div className="auth-details">
              <Avatar
                //   {...stringAvatar(data?.user?.displayName)}
                {...stringAvatar("Ameen Works")}
              />
              <p>
                {/* {data?.user?.displayName
                  ? data?.user?.displayName
                  : "Natalie lee"} */}
                Natalie lee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
