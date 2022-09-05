import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '../Modal/Modal';
import './Items.scss';

const Items = ({
  img,
  name,
  price,
  weight,
  category,
  antibiotics,
  sales,
  stock,
}) => {
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
                <button className="minusBtn" onClick={decrementCount}>
                  -
                </button>
                <span>{count}</span>
                <button className="plusBtn" onClick={incrementCount}>
                  +
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
      <div onClick={goToDetails} className="productInfo">
        <h6 className="productName">{name}</h6>
        {(category === 1 ||
          category === 2 ||
          category === 3 ||
          category === 4 ||
          category === 5 ||
          category === 8) && (
          <p className="price">
            기준가 {price}원/{weight}g
          </p>
        )}
        {category === 6 && (
          <p className="price">
            기준가 {price}원/{weight}ml
          </p>
        )}
        {category === 7 && (
          <p className="price">
            기준가 {price}원/{weight}구
          </p>
        )}
      </div>
    </ul>
  );
};

export default Items;
