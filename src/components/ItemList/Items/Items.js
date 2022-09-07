import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Modal from '../Modal/Modal';
import './Items.scss';

const Items = ({
  id,
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

  const location = useLocation();

  const navigate = useNavigate();
  const goToDetails = e => {
    navigate(`/product/${e.target.id}`);
  };

  return (
    <ul className="items">
      <div>
        <div className="item">
          <img
            className="product-img"
            alt="고기사진"
            src={img}
            id={id}
            onClick={goToDetails}
          />
          <div className="cart-icon-wrapper">
            <img
              onClick={() => {
                setIsOpen(true);
              }}
              className="cart-icon"
              alt="장바구니"
              src="images/cart-icon.png"
            />
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <div className="product-amount">
                <button className="minus-btn" onClick={decrementCount}>
                  -
                </button>
                <span>{count}</span>
                <button className="plus-btn" onClick={incrementCount}>
                  +
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
      <div className="product-info" id={id} onClick={goToDetails}>
        <h6 className="product-name">{name}</h6>
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
