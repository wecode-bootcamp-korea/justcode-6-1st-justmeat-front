import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.scss';
import ProductDesc from './ProductDesc/ProductDesc';
import ProductInfo from './ProductInfo/ProductInfo';
import ReviewList from './ReviewList/ReviewList';

function ProductDetail() {
  const [itemDetails, setItemDetails] = useState();

  const [count, setCount] = useState(1);
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const [tapType, setTapType] = useState('상품설명');
  const changeTap = e => {
    setTapType(e.target.innerHTML);
  };

  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    fetch(`http://localhost:10010/product?id=${productId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setItemDetails(data.itemData);
      });
  }, [productId]);

  return (
    <>
      <div className="details-wrapper">
        <div className="details-product-details">
          {itemDetails &&
            itemDetails.map((itemDetail, index) => (
              <ProductDesc
                key={index}
                id={itemDetail.id}
                img={itemDetail.productImgMain}
                name={itemDetail.productName}
                price={itemDetail.price}
                weight={itemDetail.weight}
                decrementCount={decrementCount}
                incrementCount={incrementCount}
                productId={count}
              />
            ))}
        </div>
      </div>
      <div className="product-desc-info-wrapper">
        <div className="product-desc-info">
          <span
            onClick={changeTap}
            style={{
              fontWeight: tapType === '상품설명' ? 'bold' : '400',
              color: tapType === '상품설명' ? 'black' : 'gray',
              textDecoration: tapType === '상품설명' ? 'underline' : 'none',
            }}
          >
            상품설명
          </span>
          <span
            onClick={changeTap}
            style={{
              fontWeight: tapType === '상품리뷰' ? 'bold' : '400',
              color: tapType === '상품리뷰' ? 'black' : 'gray',
              textDecoration: tapType === '상품리뷰' ? 'underline' : 'none',
            }}
          >
            상품리뷰
          </span>
          <span
            onClick={changeTap}
            style={{
              fontWeight: tapType === '상품정보안내' ? 'bold' : '400',
              color: tapType === '상품정보안내' ? 'black' : 'gray',
              textDecoration: tapType === '상품정보안내' ? 'underline' : 'none',
            }}
          >
            상품정보안내
          </span>
        </div>
      </div>
      <div className="product-desc-product-info">
        {tapType === '상품설명' && <ProductInfo productInfo={itemDetails} />}
        {tapType === '상품리뷰' && <ReviewList productInfo={itemDetails[0]} />}
      </div>
    </>
  );
}

export default ProductDetail;
