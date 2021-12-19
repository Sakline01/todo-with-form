import React from "react";
import "./show.css";
const Show = ({ title, desc, check, status, id, handleToggle, handleDelete, handleComplete }) => {
  return (
    <div className="show">
      <div style={check ? { backgroundColor: "#7c7b7ba1" } : null}>
        <div>
          <input onChange={(e) => e.target.checked} type="checkbox" onClick={() => handleComplete(id)} checked={check ? true : false} />
          <div>
            <h2 className={check ? "line" : "textt"}>{title}</h2>
            <p>{desc}</p>
          </div>
        </div>
        <div>
          <button className={status ? "green" : "red"} onClick={() => { return (handleToggle(id)) }}>{status ? "T" : "F"}</button>
          <button onClick={() => handleDelete(id)}>X</button>
        </div>
      </div>
    </div>
  );
};

export default Show;