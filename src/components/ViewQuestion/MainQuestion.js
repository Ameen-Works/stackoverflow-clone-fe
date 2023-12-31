import React, { useEffect, useState } from "react";
import Editor from "react-quill/lib";
import { Link, useParams } from "react-router-dom";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HistoryIcon from "@mui/icons-material/History";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Avatar from "@mui/material/Avatar";
import { stringAvatar } from "../../utils/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import HTMLReactParser from "html-react-parser";
import axios from "axios";

function MainQuestion() {
  let search = window.location.search;
  const params = new URLSearchParams(search);
  // const id = params.get("q");
  const { id } = useParams();

  const [questionData, setQuestionData] = useState();
  const [comment, setComment] = useState("");
  const user = useSelector(selectUser);

  const [answer, setAnswer] = useState("");
  const [show, setShow] = useState(false);

  const handleComment = async () => {
    if (comment !== "") {
      const body = {
        question_id: id,
        comment: comment,
        user: user.displayName,
      };
      await axios
        .post(
          `https://stackoverflow-clone-be.onrender.com/api/comment/${id}`,
          body
        )
        .then((res) => {
          setComment("");
          setShow(false);
          getUpdatedAnswer();
          // console.log(res.data);
        });
    }

    // setShow(true)
  };

  const handleSubmit = async () => {
    const body = {
      question_id: id,
      answer: answer,
      user: user.displayName,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post(
        "https://stackoverflow-clone-be.onrender.com/api/answer",
        body,
        config
      )
      .then(() => {
        alert("Answer added successfully");
        setAnswer("");
        getUpdatedAnswer();
      })
      .catch((err) => console.log(err));
  };

  const handleQuill = (value) => {
    setAnswer(value);
  };

  async function getUpdatedAnswer() {
    await axios
      .get(`https://stackoverflow-clone-be.onrender.com/api/question/${id}`)
      .then((res) => setQuestionData(res.data[0]))
      .catch((err) => console.log(err));
  }

  var toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    // [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [
      { color: ["#ff0000", "#00ff00", "#0000ff", "#220055"] },
      { background: [] },
    ], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];
  Editor.modules = {
    syntax: false,
    toolbar: toolbarOptions,
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  /*
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  Editor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];
  useEffect(() => {
    console.log(id);
    async function getFunctionDetails() {
      await axios
        .get(`https://stackoverflow-clone-be.onrender.com/api/question/${id}`)
        .then((res) => setQuestionData(res.data[0]))
        .catch((err) => console.log(err));
    }
    getFunctionDetails();
  }, [id]);

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-top">
          <h2 className="main-question">
            {questionData?.title}
{/*npm install does not install any node modules in my React projects*/}
          </h2>
          <Link to="/add-question">
            <button>Ask Question</button>
          </Link>
          {/* <a href="/add-question">
            <button>Ask Question</button>
          </a> */}
        </div>
        <div className="main-desc">
          <div className="info">
            <p>
              Asked
              <span>
                {/* 10/15/2023 */}
                {new Date(questionData?.created_at).toLocaleString()}
              </span>
            </p>
            <p>
              Active<span>today</span>
            </p>
            <p>
              Viewed<span>43times</span>
            </p>
          </div>
        </div>
        <div className="all-questions">
          <div className="all-questions-container">
            <div className="all-questions-left">
              <div className="all-options">
                <p className="arrow">▲</p>

                <p className="arrow">0</p>

                <p className="arrow">▼</p>

                <BookmarkIcon />

                <HistoryIcon />
              </div>
            </div>
            <div className="question-answer">
              {/* <p> */}
              {/* npm install does not install any node modules in my React
                projects */}
              {/* {questionData.body} */}
              {HTMLReactParser(questionData?.body || "")}
              {/* </p> */}

              <div className="author">
                <small>
                  asked
                  {new Date(questionData?.created_at).toLocaleString()}
                  {/* 10/15/2023 */}
                </small>
                <div className="auth-details">
                  <Avatar {...stringAvatar(questionData?.user)} />
                  <p>
                    {/* "Natalia lee" */}
                    {questionData?.user ? questionData?.user : "Natalia lee"}
                  </p>
                </div>
              </div>
              <div className="comments">
                <div className="comment">
                  {questionData?.comments &&
                    questionData?.comments.map((_qd) => (
                      <p key={_qd?._id}>
                        {_qd.comment}
                        {/* Try to delete npm cache with this command:
                        npm cache clean --force */}
                        <span>
                          {/* "Nate Eldredge" */}-{" "}
                          {_qd.user ? _qd.user : "Nate Eldredge"}
                        </span>{" "}
                        {"    "}
                        <small>
                          {/* 10/15/2023 */}
                          {new Date(_qd.created_at).toLocaleString()}
                        </small>
                      </p>
                    ))}
                </div>
                <p onClick={() => setShow(!show)}>Add a comment</p>
                {show && (
                  <div className="title">
                    <textarea
                      style={{
                        margin: "5px 0px",
                        padding: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        borderRadius: "3px",
                        outline: "none",
                      }}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      type="text"
                      placeholder="Add your comment..."
                      rows={5}
                    />
                    <button
                      onClick={handleComment}
                      style={{
                        maxWidth: "fit-content",
                      }}
                    >
                      Add comment
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            flexDirection: "column",
          }}
          className="all-questions"
        >
          <p
            style={{
              marginBottom: "20px",
              fontSize: "1.3rem",
              fontWeight: "300",
            }}
          >
            {questionData && questionData?.answerDetails.length}
            Answers
          </p>
          {questionData?.answerDetails.map((_q) => (
            <>
              <div
                style={{
                  borderBottom: "1px solid #eee",
                }}
                key={_q._id}
                className="all-questions-container"
              >
                <div className="all-questions-left">
                  <div className="all-options">
                    <p className="arrow">▲</p>

                    <p className="arrow">0</p>

                    <p className="arrow">▼</p>

                    <BookmarkIcon />

                    <HistoryIcon />
                  </div>
                </div>
                <div className="question-answer">
                  {/* I had the same problem, which was fixed after a few hours. I
                  couldn't find a suitable solution until I tried my own. I
                  managed to resolve it by downgrading my Node version from 16
                  to 14.15.0 using nvm (I'm using nvm). So this is my solution -
                  downgrade node version as above and try again. There are a few
                  global solutions such as: delete package-lock.json(windows): */}
                  {/* {_q.answer !== ""
                    ? HTMLReactParser(_q.answer)
                    : "Be first to Answer"} */}
                  {/* {_q.answer} */}
                  {HTMLReactParser(_q.answer || "")}
                  <div className="author">
                    <small>
                      {/* asked 10/15/2023 */}
                      {new Date(_q.created_at).toLocaleString()}
                    </small>
                    <div className="auth-details">
                      <Avatar
                        {...stringAvatar(_q?.user)}
                        // {...stringAvatar("Ameen Works")}
                      />
                      <p>
                        {/* "Natalia lee" */}
                        {_q?.user ? _q?.user : "Natalia lee"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        {/* <div className="questions">
          <div className="question">
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
            <AllQuestions />
          </div>
        </div> */}
      </div>
      <div className="main-answer">
        <h3
          style={{
            fontSize: "22px",
            margin: "10px 0",
            fontWeight: "400",
          }}
        >
          Your Answer
        </h3>
        <ReactQuill
          value={answer}
          onChange={handleQuill}
          modules={Editor.modules}
          className="react-quill"
          theme="snow"
          style={{
            height: "200px",
          }}
        />
      </div>
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "100px",
          maxWidth: "fit-content",
        }}
      >
        Post your answer
      </button>
    </div>
  );
}

export default MainQuestion;
