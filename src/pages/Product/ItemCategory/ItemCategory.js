import React from 'react';
import Category from '../Category/Category';
import './ItemCategory.scss';

export default function ItemCategory({ changeCategory }) {
  const productTypes = [
    '돼지',
    '소',
    '닭',
    '수산',
    '밀키트',
    '우유',
    '달걀',
    '이유식',
  ];

  return (
    <div>
      <div className="item-category">
        {productTypes.map((productType, index) => (
          <Category
            key={index}
            categoryId={index + 1}
            categoryName={productType}
            changeCategory={changeCategory}
          />
        ))}
      </div>
    </div>
  );
}
