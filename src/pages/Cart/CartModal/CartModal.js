import React from 'react';
import './CartModal.scss';

function CartModal(props) {
  const { message, id, closeModal } = props;
  return (
    <div className="cartmodal-container">
      <div className="cartmodal-content text-center">
        <p className="cartmodal-error-title">{message.type}</p>
        <p className="cartmodal-error-content">{message.content}</p>
        <button className="cartmodal-btn" id={id} onClick={closeModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default CartModal;
