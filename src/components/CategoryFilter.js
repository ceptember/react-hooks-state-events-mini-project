import React from "react";

function CategoryFilter({categories, onButtonClick}) {

  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map( (cat) => <button className = "" key={cat} onClick={onButtonClick}>{cat}</button> )}
    </div>
  );
}

export default CategoryFilter;
