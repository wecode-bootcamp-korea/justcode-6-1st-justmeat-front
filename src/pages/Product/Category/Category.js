import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Category.scss';

const Category = props => {
  const { categoryId, categoryName, changeCategory } = props;

  return (
    <div className="category-wrapper">
      <div className="categories" id={categoryId} onClick={changeCategory}>
        {categoryName}
      </div>
    </div>
  );
};

export default Category;
