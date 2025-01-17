import React from "react";
import Task from "./Task.js"

function TaskList({tasks}) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <ul>
      {tasks.map( (task) => <Task key={task.text} text={task.text} category={task.category}/>) }
      </ul>
    </div>
  );
}

export default TaskList;
