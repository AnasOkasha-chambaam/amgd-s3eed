import "./App.css";
import React from "react";
import background from "./imgs/background----.jpg";
import formBackground from "./imgs/background--.png";
import icon from "./imgs/camera-retro-solid.svg";

function App() {
  return (
    <div
      className="main-container"
      style={{
        background: `url(${background}) no-repeat center center/cover`,
        backgroundAttachment: "fixed",
      }}
    >
      <h1>Plant Illness Detection</h1>
      <form
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
