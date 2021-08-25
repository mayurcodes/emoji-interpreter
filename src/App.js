import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "😉": "Winking Face",
  "🥰": "Smiling Face with Hearts",
  "🤗": "Hugging Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "😐": "Neutral Face",
  "😴": "Sleeping Face",
  "😞": "Disappointed Face",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🥺": "Pleading Face",
  "😨": "Fearful Face",
  "😢": "Crying Face",
  "🥱": "Yawning Face",
  "🤧": "Sneezing Face",
  "🤡": "Clown Face",
  "👺": "Goblin",
  "😾": "Pouting Cat",
  "😼": "Cat with Wry Smile",
  "😈": "Smiling Face with Horns"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [userInput, setUserInput] = useState("");

  function emojiInputHandler(event) {
    var userInput = emojiDictionary[event.target.value];

    if (userInput === undefined) {
      userInput = "Sorry! This emoji is not available in our database";
    }
    setUserInput(userInput);
  }
  function emojiClickHandler(emoji) {
    var userInput = emojiDictionary[emoji];
    setUserInput(userInput);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <p>Enter emoji or Choose any emoji from below to know the meaning</p>
      <input onChange={emojiInputHandler}></input>
      <div className="output"> {userInput} </div>
      <h2> Our emoji list </h2>
      <div className="e-list">
        {emojiList.map(function (emoji) {
          return (
            <span
              id="items"
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
            >
              {" "}
              {emoji}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
