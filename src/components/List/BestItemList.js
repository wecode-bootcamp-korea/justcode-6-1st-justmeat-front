import React, { useState, useEffect } from 'react';
import Card from './Card';
import BestItems from './BestItems';
import './BestItemList.scss';

const BestItemList = () => {
  const [bestItems, setBestItems] = useState();

  useEffect(() => {
    fetch('/data/items.json')
      .then(res => res.json())
      .then(data => setBestItems(data.itemData));
  }, []);

  return (
    <Card className="bestItemList">
      <h5 className="bestItemTitle">저스트미트 베스트 상품</h5>
      <div>
        {bestItems &&
          bestItems.map(bestItem => (
            <BestItems
              key={bestItem.id}
              img={bestItem.productImg}
              name={bestItem.name}
              price={bestItem.price}
              weight={bestItem.weight}
              antibio={bestItem.isAntibioticFree}
              sales={bestItem.salesAmount}
              stock={bestItem.stock}
            />
          ))}
      </div>
    </Card>
  );
};

export default BestItemList;
