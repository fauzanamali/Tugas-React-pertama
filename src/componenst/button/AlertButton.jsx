import { useState } from "react";

export default function AlertButton({ text, message }) {
  const [paragraphText, setParagraphText] = useState("data bisa berubah");

  function handleClick() {
    if (paragraphText === message) {
      setParagraphText("data bisa berubah");
    } else {
      setParagraphText(message);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>
        {text}
      </button>

      <p id="text">{paragraphText}</p>
    </div>
  );
}
