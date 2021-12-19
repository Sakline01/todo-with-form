import React, { useState } from "react";

const Input = ({ onTaskCreate }) => {
  const [text, setText] = useState({ text: "", desc: "" });
  const handleOnchange = (event) => {
    setText({ ...text, text: event.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (text.text && text.desc) {
      onTaskCreate(text);
    }
    else {
      alert("Please fillup the Title and Description form");
    }
  };
  return (
    <form action="submit">
      <input
        type="text"
        value={text.text}
        onChange={handleOnchange}
        placeholder="Write title"
      />
      <input
        type="text"
        value={text.desc}
        onChange={e => setText({ ...text, desc: e.target.value })}
        placeholder="Write description"
      />
      <input type="submit" className="add" onClick={handleClick} value="+" />
    </form>
  );
};

export default Input;