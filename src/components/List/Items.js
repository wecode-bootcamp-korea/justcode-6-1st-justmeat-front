import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './Items.scss';

const Items = ({ img, name, price, weight, antibiotics, sales, stock }) => {
  return (
    <ul className="Items">
      <Link to="/details">
        <Card className="Item">
          <img className="productImg" alt="고기사진" src={img} />
          <div className="cartIconWrapper">
            <img
              className="cartIcon"
              alt="장바구니"
              src="images/cart-icon.png"
            />
          </div>
        </Card>
      </Link>
      <h6 className="productName">{name}</h6>
      <p className="price">
        기준가 {price}원/{weight}g
      </p>
    </ul>
  );
};

export default Items;
