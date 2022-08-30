import React from 'react';
import './Items.scss';

const Item = ({ sales, img, name, price, weight, antibio, stock }) => {
  return (
    <ul>
      <img alt="고기사진" src={img} />
      <div className="productInfo">
        <h6>{name}</h6>
        <p>{price}</p>
      </div>
    </ul>
  );
};

export default Item;
