import React, { useState, useEffect } from 'react';
import Category from './Category';
import '/ItemCategory.scss';

export default function ItemCategory() {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch('/data/items.json')
      .then(res => res.json())
      .then(data => setItems(data.itemData));
  }, []);

  return (
    <div>
      <p className="itemCategory">
        {items &&
          items.map(item => (
            <Category key={item.id} category={item.categoryId} />
          ))}
      </p>
    </div>
  );
}
