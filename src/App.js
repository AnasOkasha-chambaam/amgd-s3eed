import "./App.css";
import React, { useState, useEffect } from "react";
import background from "./imgs/background----.jpg";
import formBackground from "./imgs/background--.png";
import icon from "./imgs/camera-retro-solid.svg";

function App() {
  let [textToType] = useState("Plant Illness Detection");
  let [typingEffect, setTypingEffect] = useState("");
  let [index, setIndex] = useState(0);
  function typeNext() {
    // console.log(index);
    if (index >= textToType.length) return true;
    setTypingEffect(() => {
      return `${typingEffect}${textToType[index]}`;
    });
    setIndex(() => {
      return index + 1;
    });
  }

  useEffect(() => {
    if (index >= textToType.length) return;
    const intervalId = setInterval(() => {
      typeNext();
    }, 50);
    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <div
      className="main-container"
      style={{
        background: `url(${background}) no-repeat center center/cover`,
        backgroundAttachment: "fixed",
      }}
    >
      <h1>{typingEffect}</h1>
      <form
        onClick={() => {
          typeNext();
        }}
        action=""
        className="upload-img"
        style={{
          background: `url(${formBackground}) no-repeat center center/cover`,
        }}
      >
        <label htmlFor="post_img">
          <img src={icon} alt="add img" height={80} />
        </label>
        <input type="file" id="post_img" style={{ display: "none" }} />
      </form>
    </div>
  );
}

export default App;
