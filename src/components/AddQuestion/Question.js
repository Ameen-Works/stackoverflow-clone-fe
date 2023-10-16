import React, { useState } from "react";
import ReactQuill from "react-quill";
import "./Question.css";
import "react-quill/dist/quill.snow.css";
import { TagsInput } from "react-tag-input-component";

function Question() {
  const [tag, setTag] = useState([]);

  return (
    <div className="add-question">
      <div className="add-question-container">
        <div className="head-title">
          <h1>Ask a public question</h1>
        </div>
        <div className="question-container">
          <div className="question-options">
            <div className="question-option">
              <div className="title">
                <h3>Title</h3>
                <small>
                  Be specific and imagine you’re asking a question to another
                  person
                </small>
                <input
                  //   value={title}
                  //   onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g Is there an R function for finding teh index of an element in a vector?"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Body</h3>
                <small>
                  Include all the information someone would need to answer your
                  question
                </small>
                <ReactQuill
                  //   value={body}
                  //   onChange={handleQuill}
                  //   modules={Editor.modules}
                  className="react-quill"
                  theme="snow"
                />
              </div>
            </div>
            <div className="question-option">
              <div className="title">
                <h3>Tags</h3>
                <small>
                  Add up to 5 tags to describe what your question is about
                </small>
                {/* <input
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  data-role="tagsinput"
                  data-tag-trigger="Space"
                  type="text"
                  placeholder="e.g. (asp.net-mvc php react json)"
                /> */}

                <TagsInput
                  value={tag}
                  onChange={setTag}
                  name="fruits"
                  placeHolder="press enter to add new tag"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          // onClick={handleSubmit}
          className="button"
        >
          Add your question
        </button>
      </div>
    </div>
  );
}

export default Question;
