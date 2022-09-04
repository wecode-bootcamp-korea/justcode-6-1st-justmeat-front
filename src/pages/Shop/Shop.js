import React from 'react';
import Category from '../../components/ShopItems/Category';
import ItemListBanner from './ItemListBanner';
import ItemList from '../../components/ShopItems/ItemList';

function ShopItems() {
  return (
    <div>
      <ItemListBanner />
      <Category />
      <ItemList />
    </div>
  );
}

export default ShopItems;
