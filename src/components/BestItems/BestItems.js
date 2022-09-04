import React from 'react';
import BestItemTitle from './BestItemTitle/BestItemTitle';
import ItemList from '../../components/ItemList/ItemList';
import ToShop from '../ShopItems/ToShop';

export default function BestItems() {
  return (
    <div>
      <BestItemTitle />
      <ItemList />
      <ToShop />
    </div>
  );
}
