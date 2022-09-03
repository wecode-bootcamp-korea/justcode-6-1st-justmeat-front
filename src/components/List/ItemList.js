import React, { useState, useEffect } from 'react';
import Card from './Card';
import Items from './Items';
import Category from './Category';
import './ItemList.scss';

const ItemList = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch('/data/items.json')
      .then(res => res.json())
      .then(data => setItems(data.itemData));
  }, []);

  return (
    <div>
      <img
        className="itemListBanner"
        alt="고기사진"
        src="/images/kyle-mackie-qgfjZUXup1M-unsplash.jpg"
      />
      <Card className="itemList">
        <p className="itemCategory">
          {items &&
            items.map(item => (
              <Category key={item.id} category={item.categoryId} />
            ))}
        </p>
        <Card className="itemFlex">
          {items &&
            items.map(item => (
              <Items
                key={item.id}
                img={item.productImg}
                name={item.productName}
                price={item.price}
                weight={item.weight}
                antibiotics={item.isAntibioticFree}
                sales={item.salesAmount}
                stock={item.stock}
              />
            ))}
        </Card>
      </Card>
    </div>
  );
};

export default ItemList;
