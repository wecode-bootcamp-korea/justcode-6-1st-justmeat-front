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
    <Card className="itemList">
      <p>
        <span>돼지</span>
        <span>소</span>
        <span>닭</span>
        <span>수산</span>
        <span>밀키트</span>
        <span>우유</span>
        <span>달걀</span>
        <span>이유식</span>
      </p>
      <div className="itemFlex">
        {items &&
          items.map(item => (
            <Items
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
