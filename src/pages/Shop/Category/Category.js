import React from 'react';
import './Category.scss';

const Category = ({ category }) => {
  return (
    <div className="CategoryWrapper">
      <div className="categories">
        <span>{category}</span>
      </div>
    </div>
  );
};

export default Category;
