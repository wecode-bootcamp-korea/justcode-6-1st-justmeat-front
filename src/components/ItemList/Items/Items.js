import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '../Modal/Modal';
import './Items.scss';

const Items = ({ img, name, price, weight, antibiotics, sales, stock }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(1);
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };
  const navigate = useNavigate();
  const goToDetails = () => {
    navigate('/details');
  };

  return (
    <ul className="items">
      <div>
        <div className="item">
          <img
            className="productImg"
            alt="고기사진"
            src={img}
            onClick={goToDetails}
          />
          <div className="cartIconWrapper">
            <img
              onClick={() => {
                setIsOpen(true);
              }}
              className="cartIcon"
              alt="장바구니"
              src="images/cart-icon.png"
            />
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <div className="productAmount">
                <button onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button onClick={incrementCount}>+</button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
      <div onClick={goToDetails} className="productInfo">
        <h6 className="productName">{name}</h6>
        <p className="price">
          기준가 {price}원/{weight}g
        </p>
      </div>
    </ul>
  );
};

export default Items;