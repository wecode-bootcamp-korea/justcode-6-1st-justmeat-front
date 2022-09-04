import React from 'react';
import './ReviewCard.scss';

function ReviewCard({ reviewListData }) {
  return (
    <article className="review-wrap">
      <div className="review-detail-contain">
        <div className="review-detail-wrap">
          <div className="review-detail-state-tag">{reviewListData.title}</div>
          <div className="review-detail-comment">
            <span>{reviewListData.content}</span>
          </div>
          <div className="review-detail-user-info">
            <span className="review-detail-user-name">
              {reviewListData.name}
            </span>
            <span className="review-detail-user-stacked">
              {reviewListData.stock}회 구매
            </span>
            <span className="review-detail-createdAt">
              {reviewListData.createdAt}
            </span>
          </div>
        </div>
        {reviewListData.reviewImg && (
          <div className="review-detail-img-wrap todo">
            <img src={reviewListData.reviewImg} alt="review-img" />
          </div>
        )}
      </div>
      <div className="review-other-things-wrap">
        <ul>
          함께 구매하신 상품 (
          {reviewListData.productAmount + reviewListData.함께구매상품.length})
        </ul>
        <li>{reviewListData.함께구매상품}</li>
      </div>
    </article>
  );
}

export default ReviewCard;
