import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ShopDetails.scss';
import ProductDetails from './ProductDetails/ProductDetails';

function ShopDetails() {
  const [itemDetails, setItemDetails] = useState();

  const [count, setCount] = useState(1);
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const params = useParams();
  const productId = params.id;

  // `http://localhost:10010/product?id=${productId}`
  useEffect(() => {
    fetch('/data/items.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setItemDetails(data.itemData);
        // setItemDetails(data.)
      });
  }, [productId]);

  return (
    <>
      <div className="details-wrapper">
        <ProductDetails className="details-product-details">
          {itemDetails &&
            itemDetails.map((itemDetail, index) => (
              <ProductDetails
                key={index}
                id={itemDetail.id}
                img={itemDetail.productImgMain}
                name={itemDetail.productName}
                price={itemDetail.price}
                weight={itemDetail.weight}
              />
            ))}
        </ProductDetails>
        <div className="details-amount-flex">
          <div className="details-amount-wrapper">
            <span className="details-amount-title">수량</span>
            <div className="details-amount">
              <button className="details-minus-btn" onClick={decrementCount}>
                -
              </button>
              <span>{count}</span>
              <button className="details-plus-btn" onClick={incrementCount}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="details-custom-order-flex">
          <div className="details-custom-order-wrapper">
            <span className="details-custom-order-title">옵션</span>
            <select className="details-custom-order">
              <option value="0">보통 (16mm)</option>
              <option value="1">얇게 (11mm)</option>
              <option value="2">두껍 (24mm)</option>
            </select>
          </div>
        </div>
        <div className="details-btn-flex">
          <div className="details-btn-wrapper">
            <button className="details-buy-now">바로구매</button>
            <Link to="/cart">
              <button className="details-to-cart">장바구니</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="details-info-wrapper">
        <div className="details-info">
          <span>상품설명</span>
          <span>상품리뷰</span>
          <span>상품정보안내</span>
        </div>
      </div>
      <div className="details-product-info">상품설명</div>
    </>
  );
}

export default ShopDetails;
