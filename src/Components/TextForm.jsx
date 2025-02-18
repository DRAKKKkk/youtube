import React, { useState } from "react";

let myStyle = {
  backgroundColor: "black",
  color: "white",
};

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("Lowercase was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearText = () => {
    console.log("Clear Text Clicked");
    let newText = ("");
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("OnChange was Clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <textarea
          className="form-control"
          style={myStyle}
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3 my-3" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-3" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div className="container">
        <h1>Your Text Summary</h1>
        <p>
          {" "}
          {text.split(" ").length} Words and {text.length} chracters{" "}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read </p>
      </div>
    </>
  );
}
