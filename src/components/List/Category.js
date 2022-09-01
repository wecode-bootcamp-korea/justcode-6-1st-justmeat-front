import React from 'react';
import Card from './Card';
import './Category.scss';

const Category = ({ category }) => {
  return (
    <div className="CategoryWrapper">
      <Card className="categories">
        <span>{category}</span>
      </Card>
    </div>
  );
};

export default Category;
