import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductDesc.scss';

export default function ProductDesc({
  id,
  img,
  name,
  price,
  weight,
  category,
  decrementCount,
  incrementCount,
  productCount,
}) {
  useEffect(() => {
    fetch(`http://localhost:10010/product/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setShopItems(data.itemData));
  }, []);

  return (
    <div className="product-desc-contain setting-center">
      <div className="product-desc-product-img-wrapper">
        <img src={img} alt="고기사진" className="product-desc-product-img" />
      </div>
      <div className="product-desc-content todo">
        <p className="product-desc-product-name">{name}</p>
        <p className="product-desc-price">
          기준가 {price}원 ({weight}g)
        </p>
        {(category === 1 ||
          category === 2 ||
          category === 3 ||
          category === 4 ||
          category === 5 ||
          category === 8) && (
          <div>
            <p className="product-desc-product-detail">
              {weight}g당 {price}원
            </p>
            <p className="product-desc-price">
              기준가 {price}원/{weight}g
            </p>
          </div>
        )}
        {category === 6 && (
          <div>
            <p className="product-desc-product-detail">
              {weight}ml당 {price}원
            </p>
            <p className="product-desc-price">
              기준가 {price}원/{weight}ml
            </p>
          </div>
        )}
        {category === 7 && (
          <div>
            <p className="product-desc-product-detail">
              {weight}구당 {price}원
            </p>
            <p className="product-desc-price">
              기준가 {price}원/{weight}구
            </p>
          </div>
        )}
        <div className="product-desc-custom-order-flex">
          <div className="product-desc-custom-order-wrapper">
            <span className="product-desc-custom-order-title">옵션</span>
            <select className="product-desc-custom-order">
              <option value="0">보통 (16mm)</option>
              <option value="1">얇게 (11mm)</option>
              <option value="2">두껍 (24mm)</option>
            </select>
          </div>
        </div>
        <div className="product-desc-amount-flex">
          <div className="product-desc-amount-wrapper">
            <span className="product-desc-amount-title">수량</span>
            <div className="product-desc-amount">
              <button
                className="product-desc-minus-btn"
                onClick={decrementCount}
              >
                -
              </button>
              <div className="product-desc-count">{productCount}</div>
              <button
                className="product-desc-plus-btn"
                onClick={incrementCount}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="product-desc-btn-flex">
          <div className="product-desc-btn-wrapper">
            <button className="product-desc-buy-now">바로구매</button>
            <Link to="/cart">
              <button className="product-desc-to-cart">장바구니</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
