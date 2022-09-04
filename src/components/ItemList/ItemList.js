import React, { useState, useEffect } from 'react';
import Items from './Items';
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
      <div className="itemList">
        <div className="itemFlex">
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
        </div>
      </div>
    </div>
  );
};

export default ItemList;
