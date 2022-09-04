import React from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import './ReviewList.scss';

function ReviewList() {
  return (
    <div className="review-list-container setting-center">
      {/* <section> 상품설명, 상품리뷰, 상품정보안내 menu bar */}
      <section className="review-list-content">
        <div className="review-list-wrap">
          <ReviewCard />
        </div>
      </section>
      <section className="review-viewmore-btn"></section>
    </div>
  );
}

export default ReviewList;
