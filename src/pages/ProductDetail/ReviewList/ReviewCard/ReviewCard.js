import React, { useState } from 'react';
import ReviewModal from '../ReviewModal/ReviewModal';
import './ReviewCard.scss';

function ReviewCard(props) {
  const { reviewListData, productName } = props;

  // review 함께 구매한 상품 더보기 state value
  const [isModal, setIsModal] = useState(false);
  const openModal = e => {
    setIsModal(true);
  };
  const closeModal = e => {
    console.log(e.target);
    setIsModal(false);
  };

  return (
    <>
      <article className="review-wrap">
        <div className="review-detail-contain">
          <div className="review-detail-wrap">
            <div className="review-detail-title">{reviewListData.title}</div>
            <div
              className="review-detail-comment"
              style={{ height: reviewListData.reviewImg ? '80%' : '180px' }}
            >
              <span>{reviewListData.content}</span>
            </div>
            <div className="review-detail-user-info">
              <span className="review-detail-user-name">
                {reviewListData.name}
              </span>
              {/* <span className="review-detail-user-stacked">
                {reviewListData.stock}회 구매
              </span> */}
              <span className="review-detail-createdAt">
                {reviewListData.createdAt.substr(0, 10)}
              </span>
            </div>
          </div>
          {reviewListData.reviewImg && (
            <div className="review-detail-img-wrap">
              <img src={reviewListData.reviewImg} alt="review-img" />
            </div>
          )}
        </div>
        <div className="review-purchase-record-wrap" onClick={openModal}>
          <ul>함께 구매하신 상품 ({reviewListData.purchaseRecord.length})</ul>
          {reviewListData.purchaseRecord.length < 3 ? (
            reviewListData.purchaseRecord.map((purchaseList, index) => {
              return (
                <span key={index}>
                  {purchaseList.productName} x {purchaseList.productAmount}
                </span>
              );
            })
          ) : (
            <span>자세히 보기 ...</span>
          )}
        </div>
      </article>

      {isModal ? (
        <ReviewModal
          reviewData={reviewListData}
          productName={productName}
          closeModal={closeModal}
        />
      ) : null}
    </>
  );
}

export default ReviewCard;
