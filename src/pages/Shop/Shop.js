import React, { useState, useEffect } from 'react';
import ItemCategory from './ItemCategory/ItemCategory';
import ItemListBanner from './ItemListBanner/ItemListBanner';
import ItemList from '../../components/ItemList/ItemList';

function Shop() {
  const [shopItems, setShopItems] = useState();
  const [queryCategoryId, setQueryCategoryId] = useState();

  // useEffect(() => {
  //   fetch(`http://localhost:10010/product/${queryCategoryId}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => setShopItems(data.itemData));
  // }, [queryCategoryId]);

  const changeCategory = e => {
    setQueryCategoryId(e.target.id);
  };

  return (
    <div>
      <ItemListBanner />
      <ItemCategory changeCategory={changeCategory} />
      <ItemList data={shopItems} />
    </div>
  );
}

export default Shop;
