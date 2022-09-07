import React from 'react';
import './ProductDetails.scss';

export default function ProductDetails({
  id,
  img,
  name,
  price,
  weight,
  category,
}) {
  return (
    <>
      <div className="product-details-product-img-wrapper">
        <img
          src="images/porkbelly-fresh-detail.png"
          className="product-details-product-img"
        ></img>
      </div>
      <h3 className="product-details-product-name">상품명</h3>
      <p className="product-details-price">
        기준가 {price}원({weight}g)
      </p>
      {(category === 1 ||
        category === 2 ||
        category === 3 ||
        category === 4 ||
        category === 5 ||
        category === 8) && (
        <p className="product-details-price">
          기준가 {price}원/{weight}g
        </p>
      )}
      {category === 6 && (
        <p className="product-details-price">
          기준가 {price}원/{weight}ml
        </p>
      )}
      {category === 7 && (
        <p className="product-details-price">
          기준가 {price}원/{weight}구
        </p>
      )}
    </>
  );
}
