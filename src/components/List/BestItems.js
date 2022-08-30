import React from 'react';
import Card from './Card';
import './BestItems.scss';

const BestItems = ({ sales, img, name, price, weight, antibio, stock }) => {
  return (
    <ul className="bestItems">
      <Card className="bestItem">
        <img className="productImg" alt="고기사진" src={img} />
        <div className="productInfo">
          <h6 className="productName">{name}</h6>
          <p className="price">
            {price}/{weight}
          </p>
        </div>
      </Card>
    </ul>
  );
};

export default BestItems;
