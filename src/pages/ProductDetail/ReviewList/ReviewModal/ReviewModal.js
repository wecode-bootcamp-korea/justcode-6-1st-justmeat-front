import React from 'react';
import './ReviewModal.scss';

function ReviewModal(props) {
  const { reviewData, productName, closeModal } = props;
  // console.log(reviewData);
  return (
    <div className="reviewmodal-container">
      <div className="reviewmodal-content">
        <div
          className="reviewmodal-closed-button text-center"
          onClick={closeModal}
        >
          x
        </div>
        <div className="reviewmodal-top">
          <span className="reviewmodal-user-name">{reviewData.name}</span>
          <span className="reviewmodal-createdAt">
            {reviewData.createdAt.substr(0, 10)}
          </span>
        </div>
        <div className="reviewmodal-line"></div>
        <div className="reviewmodal-comment">
          <p className="reviewmodal-title">{reviewData.title}</p>
          <p className="reviewmodal-comment">{reviewData.content}</p>
        </div>
        <div className="reviewmodal-purchase-record-wrap">
          <div className="reviewmodal-purchase-record-top">
            함께 구매하신 상품 ({reviewData.purchaseRecord.length})
          </div>
          <div className="reviewmodal-purchase-record-content">
            <ul>
              {productName}
              {reviewData.purchaseRecord.map((product, index) => (
                <li key={index}>
                  - {product.productName} x {product.productAmount}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
