import React from "react";

function Task(props) {

  function deleteTask (event){
    event.target.parentNode.remove();
  }

  return (
    <div className="task" > 
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button className="delete" onClick = {deleteTask} >X</button>
    </div>
  );
}

export default Task;

