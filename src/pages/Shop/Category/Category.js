import React from 'react';
import './Category.scss';

const Category = props => {
  const { categoryId, categoryName, changeCategory } = props;

  return (
    <div className="CategoryWrapper">
      <div className="categories" id={categoryId} onClick={changeCategory}>
        {categoryName}
      </div>
    </div>
  );
};

export default Category;
