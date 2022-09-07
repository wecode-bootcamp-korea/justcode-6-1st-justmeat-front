import React, { useState, useEffect } from 'react';
import BestItemTitle from './BestItemTitle/BestItemTitle';
import ItemList from '../ItemList/ItemList';
import ToShop from '../ToShop/ToShop';

export default function BestItems() {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch('/Data/items.json')
      .then(res => res.json())
      .then(data => setItems(data.itemData));
  }, []);

  return (
    <div>
      <BestItemTitle />
      <ItemList data={items} />
      <ToShop />
    </div>
  );
}

//('http://localhost:10010/product/')
// '/Data/items.json'
