import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  // All possible tasks from data and user-submitted
  const [allTasks, setAllTasks] = useState(TASKS)
  //filtered tasks 
  const [tasksToDisplay, setTasksToDisplay] = useState(allTasks)
  const [newDetails, setNewDetails] = useState("");
  const [newCat, setNewCat] = useState("Code")

  function handleButton(event){
    event.target.parentNode.childNodes.forEach(x => x.className = "");
    event.target.className = "selected"; 
    setTasksToDisplay( allTasks.filter( (task) => {
      if (event.target.textContent === "All") {
        return true;
      } 
      return task.category === event.target.textContent } ))
  }

  function handleTaskFormSubmit (event){
    event.preventDefault(); 
    const newTask = {
      text: newDetails,
      category: newCat,
    }
    
    setTasksToDisplay([...tasksToDisplay, newTask]) 
    setAllTasks([...allTasks, newTask]) 
    
    setNewCat("Code"); 
    setNewDetails("");
    
  }

  function handleDetailsChange(event){
    setNewDetails(event.target.value);
    console.log(newDetails)
  }

  function handleCatChange(event){
    setNewCat(event.target.value);
    console.log(newCat)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onButtonClick ={handleButton} />
      <NewTaskForm  categories={CATEGORIES} 
                    newCat={newCat} 
                    newDetails={newDetails} 
                    onTaskFormSubmit = {handleTaskFormSubmit}
                    onDetailsChange = {handleDetailsChange}
                    onCatChange = {handleCatChange} />
      <TaskList tasks = {tasksToDisplay}/>
    </div>
  );
}

export default App;
