import React from 'react';
import './ReviewCard.scss';

function ReviewCard() {
  return (
    <article className="review-wrap">
      <div className="review-detail-contain">
        <div className="review-detail-wrap">
          <div className="review-detail-state-tag">좋아요</div>
          <div className="review-detail-comment">
            <span>너무 신선해요 맛있어요</span>
          </div>
          <div className="review-detail-user-info">
            <span className="review-detail-user-name">김*현</span>
            <span className="review-detail-user-stacked">10회 구매</span>
            <span className="review-detail-createdAt">2022-09-03</span>
          </div>
        </div>
        <div className="review-detail-img-wrap todo">
          <img src="" alt="review-img" />
        </div>
      </div>
      <div className="review-other-things-wrap">
        <ul>함께 구매하신 상품 (3)</ul>
        <li>수신선 소고기 x 2 / 초신선 돼지고기 x 1</li>
      </div>
    </article>
  );
}

export default ReviewCard;
