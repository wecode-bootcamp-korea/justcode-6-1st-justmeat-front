import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from './ReviewCard/ReviewCard';
import './ReviewList.scss';

function ReviewList({ productInfo }) {
  // ReviewList state value
  const [reviewListData, setReviewListData] = useState([]);

  const params = useParams();
  const productId = params.id;

  // ReviewList MockData
  useEffect(() => {
    fetch(`http://localhost:10010/product/review/${productId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        setReviewListData(data.itemData);
      });
  }, []);

  return (
    <div className="review-list-container setting-center">
      <section className="review-list-content">
        <div className="review-list-wrap">
          {reviewListData.map((data, index) => {
            return (
              <ReviewCard
                key={index}
                reviewListData={data}
                productName={productInfo.productName}
              />
            );
          })}
        </div>
      </section>
      <section className="review-viewmore-btn"></section>
    </div>
  );
}

export default ReviewList;
