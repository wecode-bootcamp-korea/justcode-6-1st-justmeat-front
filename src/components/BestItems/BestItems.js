import React, { useState, useEffect } from 'react';
import BestItemTitle from './BestItemTitle/BestItemTitle';
import ItemList from '../ItemList/ItemList';

export default function BestItems() {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch('http://localhost:10010/product/')
      .then(res => res.json())
      .then(data => setItems(data.itemData));
  }, []);

  return (
    <div>
      <BestItemTitle />
      <ItemList data={items} />
    </div>
  );
}
