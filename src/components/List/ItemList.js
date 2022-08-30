import React, { useState, useEffect } from 'react';
import Card from './Card';
import './ItemList.scss';

const ItemList = () => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch('/data/items.json')
      .then(res => res.json())
      .then(data => setItems(data.itemData));
  }, []);

  return (
    <Card>
      <div className="itemList">
        {items &&
          items.map(item => (
            <item
              key={item.id}
              img={item.productImg}
              name={item.name}
              price={item.price}
              weight={item.weight}
              antibio={item.isAntibioticFree}
              sales={item.salesAmount}
              stock={item.stock}
            />
          ))}
      </div>
    </Card>
  );
};

export default ItemList;
