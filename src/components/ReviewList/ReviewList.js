import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import './ReviewList.scss';

function ReviewList() {
  // ReviewList state value
  const [reviewListMockData, setReviewListMockData] = useState([]);

  // ReviewList MockData
  useEffect(() => {
    fetch('/data/ReviewList.json')
      .then(res => res.json())
      .then(data => {
        setReviewListMockData(data.ReviewListData);
      });
  }, []);

  return (
    <div className="review-list-container setting-center">
      {/* <section> 상품설명, 상품리뷰, 상품정보안내 menu bar */}
      <section className="review-list-content">
        <div className="review-list-wrap">
          {reviewListMockData.map((data, index) => {
            return <ReviewCard key={index} reviewListData={data} />;
          })}
        </div>
      </section>
      <section className="review-viewmore-btn"></section>
    </div>
  );
}

export default ReviewList;
