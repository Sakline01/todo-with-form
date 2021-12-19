import React, { useState } from "react";
import Input from "./Input";
import Show from "./Show";
import { v4 as uuidv4 } from 'uuid';
// import Showcomplete from "./ShowComplete";
const Todos = () => {
  const [todo, setTodo] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const handleTaskCreate = ({ text, desc }) => {
    const payload = {
      title: text,
      desc: desc,
      status: false,
      complete: false,
      id: uuidv4()
    };
    setTodo([...todo, payload]);
  };
  const handleToggle = (id) => {
    const updatedTodo = todo.map((item) => (
      item.id === id ? { ...item, status: !item.status } : item
    ));
    setTodo(updatedTodo);
  }
  const handleComplete = (id) => {
    const updatedTodo = todo.map((item) => (
      item.id === id ? { ...item, complete: !item.complete } : item
    ));
    console.log(updatedTodo)
    setTodo(updatedTodo);
  }
  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id))
  }
  const handleComplete2 = (id) => {
    setIsComplete(t => !t);
  }
  return (
    <>
      <Input key={uuidv4()} onTaskCreate={handleTaskCreate} />
      {todo.filter((item) => item.complete !== true).map((item) => (
        <>
          <Show handleComplete={handleComplete} check={item.complete} handleDelete={handleDelete} handleToggle={handleToggle} key={item.id} id={item.id} title={item.title} desc={item.desc} status={item.status} />
        </>
      ))}
      {todo.length ? isComplete ? <button style={{ marginBottom: "15px" }} onClick={handleComplete2}>Hide Completed</button> : <button onClick={handleComplete2}>Show Completed</button> : null}
      {isComplete ? todo.filter((item) => item.complete === true).map((item) => (
        <>
          <Show handleComplete={handleComplete} check={item.complete} handleDelete={handleDelete} handleToggle={handleToggle} key={item.id} id={item.id} title={item.title} desc={item.desc} status={item.status} />
        </>
      )) : null}
    </>
  );
};

export default Todos;