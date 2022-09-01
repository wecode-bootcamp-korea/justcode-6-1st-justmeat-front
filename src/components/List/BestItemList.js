import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BestItems from './BestItems';
import './BestItemList.scss';

const BestItemList = () => {
  const [bestItems, setBestItems] = useState();

  useEffect(() => {
    fetch('/data/bestItems.json')
      .then(res => res.json())
      .then(data => setBestItems(data.bestItemData));
  }, []);

  return (
    <div>
      <div className="bestItemList">
        <h5 className="bestItemTitle">저스트미트 베스트 상품</h5>
        <div className="bestItemFlex">
          {bestItems &&
            bestItems.map(bestItem => (
              <BestItems
                key={bestItem.id}
                img={bestItem.productImgMain}
                name={bestItem.productName}
                price={bestItem.price}
                weight={bestItem.weight}
                antibiotics={bestItem.isAntibioticFree}
                sales={bestItem.salesAmount}
                stock={bestItem.stock}
              />
            ))}
        </div>
      </div>
      <Link to="/shop">
        <div className="toShopWrapper">
          <img
            className="toShop"
            alt="고기사진"
            src="/images/kyle-mackie-qgfjZUXup1M-unsplash.jpg"
          />
        </div>
      </Link>
    </div>
  );
};

export default BestItemList;
