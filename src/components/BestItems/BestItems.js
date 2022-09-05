import React from 'react';
import BestItemTitle from './BestItemTitle/BestItemTitle';
import ItemList from '../ItemList/ItemList';
import ToShop from '../ToShop/ToShop';

export default function BestItems() {
  return (
    <div>
      <BestItemTitle />
      <ItemList />
      <ToShop />
    </div>
  );
}
