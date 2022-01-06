import React from "react";

function NewTaskForm({categories, onTaskFormSubmit, newCat, newDetails, onDetailsChange, onCatChange }) {


  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newDetails} onChange={onDetailsChange} />
      </label>
      <label>
        Category
        <select name="category" value={newCat} onChange ={onCatChange}>
          {/* render <option> elements for each category here */}
          {categories.filter( (cat) => cat !== "All" ).map( (cat) => <option key={cat}>{cat}</option> )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
