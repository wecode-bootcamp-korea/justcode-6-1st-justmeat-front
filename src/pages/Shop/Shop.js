import React from 'react';
import Category from './Category/Category';
import ItemListBanner from './ItemListBanner/ItemListBanner';
import ItemList from '../../components/ItemList/ItemList';

function Shop() {
  return (
    <div>
      <ItemListBanner />
      <Category />
      <ItemList />
    </div>
  );
}

export default Shop;
